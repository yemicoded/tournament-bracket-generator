"use client";
import React from "react";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { TFormHandler } from "types/form-handler";
import { TParticipant } from "types/participant";
import { addDoc, collection } from "firebase/firestore";
import { db } from "handlers/firebase/config";
import { GameContext } from "providers/contexts/game-context";
import { useRouter, useSearchParams } from "next/navigation";
import { createBrackets } from "handlers/firebase/createBrackets";
import addDocument from "handlers/firebase/lib/addDocument";
import { APP_LINKS } from "navigations/app-links";
import {toast} from 'react-toastify'

export interface IModifiedParticipantsFormValue {
  participants: TParticipant[];
}
const ParticipantsNameHandler =
  (): TFormHandler<IModifiedParticipantsFormValue> => {
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [validationAttempt, setValidationAttempt] =
      React.useState<boolean>(false);
    // const { participants_count: count } = React.useContext(GameContext);
    const count = useSearchParams().get("count");
    const tournament = useSearchParams().get("tournament");
    const router = useRouter();

    const formValues = {
      participants: Array.from({ length: count as unknown as number }).map(
        (_, index) =>
          ({
            id: index + 1,
            name: "",
            won: false,
          } as unknown as TParticipant)
      ),
    } as IModifiedParticipantsFormValue;
    const validationSchema = Yup.object({
      participants: Yup.array().of(
        Yup.object().shape({
          name: Yup.string().required("Name required"),
        })
      ),
    });
    const onSubmit = async (values: IModifiedParticipantsFormValue) => {
      if (tournament && count) {
        setLoading(true);
        await addDocument("Participants", {
          id: tournament,
          participants: values.participants,
        })
          .then(async () => {
            toast.success("Tournament Participants Created Successfully. Generating Bracket Template")
            await addDocument("Matches", {
              id: tournament,
              matchList: createBrackets(values.participants),
            } as any)
              .then((res) => {
                setLoading(false);
                toast.success("Brackets Template Created Successfully. Redirecting in 5 seconds!")
                // console.log("Brackets Generated");
                router.push(
                  `${APP_LINKS.BRACKET}?tournament=${tournament}&&count=${count}`
                );
              })
              .catch((err) => {
                toast.error(`There was an error generating bracket template due to this error: ${err}`)
                setLoading(false);
                // console.log("Could not create brackets");
              });
          })
          .catch((err) => {
            toast.error(`There was an error creating participants due to this error: ${err}`)
            setLoading(false);
            // console.log("Could not create Participants");
          });
      }
    //   console.log("form-values", createBrackets(values.participants));
    };

    const formik = useFormik({
      initialValues: formValues,
      onSubmit: onSubmit,
      validationSchema,
      validateOnBlur: false,
      validateOnChange: true,
    });
    return { formik, isLoading, setValidationAttempt };
  };

export default ParticipantsNameHandler;
