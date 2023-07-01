"use client";
import React from "react";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { TFormHandler } from "types/form-handler";
import { TParticipant } from "types/participant";
import { useRouter, useSearchParams } from "next/navigation";
import getDocumentByID from "handlers/firebase/lib/getDocumentByID";
import updateInitialBracket from "handlers/firebase/updateInitialBracket";
import { toast } from "react-toastify";

export interface IPairParticipantsFormValue {
  seeds: ISeed[];
}
export interface ISeed {
  id: number;
  teams: TParticipant[];
}

const PairParticipantsHandler =
  (): TFormHandler<IPairParticipantsFormValue> => {
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [isOpen, setOpen] = React.useState<boolean>(false);
    const [validationAttempt, setValidationAttempt] =
      React.useState<boolean>(false);
    const [participants, setParticipants] = React.useState<TParticipant[]>([]);
    // const { participants_count: count } = React.useContext(GameContext);
    const count = useSearchParams().get("count");
    const tournamentID = useSearchParams().get("tournament");
    const router = useRouter();

    React.useEffect(() => {
      if (tournamentID) {
        getDocumentByID("Participants", tournamentID).then((res) => {
          setParticipants(res.participants);
        });
      }
    });

    const formValues = {
      seeds: Array.from({ length: (count as unknown as number) / 2 }).map(
        (_, index) => ({
          id: index + 1,
          teams: [
            {
              id: index + 1,
              name: "",
              won: false,
            },
            {
              id: index + 2,
              name: "",
              won: false,
            },
          ] as unknown as TParticipant[],
        })
      ),
    } as IPairParticipantsFormValue;
    // const validationSchema = Yup.object({
    //   seeds: Yup.array().of(
    //     Yup.object().shape({
    //       teams[seeds].name: Yup.string().required("Name required"),
    //     })
    //   ),
    // });
    const onSubmit = async (values: IPairParticipantsFormValue) => {
      setLoading(true);
      if (tournamentID) {
        updateInitialBracket(tournamentID, values.seeds, participants)
          .then(() => {
            toast.success(
              "Bracket has been reset and Round 1 Tournament Participants Pair Updated Successfully. You can proceed to close the modal or update the pair!"
            );
            setLoading(false);
          })
          .catch((err) => {
            toast.error(
              "There was a problem creating your pair. Please try again..."
            );
          });
      }
      //   console.log("form-values", values);
    };

    const formik = useFormik({
      initialValues: formValues,
      onSubmit: onSubmit,
      //   validationSchema,
      validateOnBlur: false,
      validateOnChange: true,
    });
    return { formik, isLoading, setValidationAttempt };
  };

export default PairParticipantsHandler;
