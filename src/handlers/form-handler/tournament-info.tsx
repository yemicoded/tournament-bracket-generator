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
import addDocument from "handlers/firebase/lib/addDocument";
import { APP_LINKS } from "navigations/app-links";
import { toast } from "react-toastify";

export interface ITournamentInfo {
  id: string;
  participantsCount: number | undefined;
}
const TournamentInfoHandler = (): TFormHandler<ITournamentInfo> => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [validationAttempt, setValidationAttempt] =
    React.useState<boolean>(false);
  const router = useRouter();

  const formValues = {
    id: "",
    participantsCount: undefined,
  } as ITournamentInfo;

  const validationSchema = Yup.object({
    id: Yup.string().required("Please Enter Tournament Title"),
    participantsCount: Yup.string().required(
      "Enter the number of participants"
    ),
  });

  const onSubmit = async (values: ITournamentInfo) => {
    setLoading(true);
    await addDocument("Tournaments", {
      id: values.id,
      noOfParticipants: values.participantsCount,
    })
      .then(() => {
        setLoading(false);
        toast.success(
          "Tournament Created Successfully. Redirecting in 2 seconds!"
        );
        // console.log("Tournament Added");
        router.push(
          `${APP_LINKS.PARTICIPANTS_NAME}?tournament=${values.id}&&count=${values.participantsCount}`
        );
      })
      .catch((err) => {
        toast.error(
          `There was a problem creating your tournament as a result of this error: ${err}`
        );
        setLoading(false);
        // console.log(err);
      });
    // console.log("form-values", values);
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: onSubmit,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: validationAttempt,
  });
  return { formik, isLoading, setValidationAttempt };
};

export default TournamentInfoHandler;
