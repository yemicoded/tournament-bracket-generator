import { Button } from "components/button";
import { Container } from "components/container";
import Input from "components/input/base-input";
import DialogModal from "components/modal/dialog-modal";
import Select from "components/select";
import { Text } from "components/typography";
import getDocumentByID from "handlers/firebase/lib/getDocumentByID";
import { IPairParticipantsFormValue } from "handlers/form-handler/pair-participants";
import useFormHandler from "handlers/form-handler/useFormHandler";
import { useSearchParams } from "next/navigation";
import React from "react";
import { TFormHandler } from "types/form-handler";

interface IPairParticipants {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const PairParticipants: React.FC<IPairParticipants> = ({ setModalOpen }) => {
  const [participants, setParticipants] = React.useState<any[]>([]);
  const tournamentID = useSearchParams().get("tournament");
  const [isDialogOpen, setDialogOpen] = React.useState<boolean>(false);

  const { formik, isLoading, setValidationAttempt } = useFormHandler({
    type: "pair-participants",
  }) as TFormHandler<IPairParticipantsFormValue>;

  React.useEffect(() => {
    if (tournamentID) {
      getDocumentByID("Participants", tournamentID).then((res) => {
        setParticipants(res.participants);
      });
    }
  });

  return (
    <React.Fragment>
      <Container className="w-full md:min-w-[600px] max-w-[600px] max-h-[600px] bg-white overflow-hidden rounded-[20px] p-4 md:p-6 flex flex-col space-y-4">
        <Container>
          <Text fontWeight="semibold" className="text-[20px] md:text-[24px] text-center">
            Pair Participants (Round 1)
          </Text>
          <Text fontWeight="semibold" className="text-[14px] md:text-[16px] text-center">
            You created {participants.length} participants for Tournament Test1
          </Text>
        </Container>
        <Container className="w-full max-h-[100%] overflow-y-auto flex flex-col space-y-3">
          <Container className="w-full rounded-[10px] bg-red-200 p-3 md:p-4">
            <Text fontWeight="semibold" className="text-red-600 text-[14px] md:text-base">
              Note
            </Text>
            <Text className="text-[14px] md:text-base">
              It is required that you select a participant and Ensure that you
              do not select a participant in multiple match.
            </Text>
          </Container>
          <form onSubmit={formik.handleSubmit}>
            <Container className="w-full flex flex-col space-y-4">
              {Array.from({ length: participants.length / 2 }).map(
                (_, index) => (
                  <Container key={index}>
                    <Text fontWeight="semibold" className="text-gray-700">
                      Match {index + 1}
                    </Text>
                    <Container className="flex items-center space-x-4 justify-between">
                      <Container className="flex-1">
                        <Select
                          placeholder="Select Participant"
                          name={
                            formik.values.seeds[index * 2]
                              ?.id as unknown as string
                          }
                          onChange={({ target }) => {
                            if (!!formik.values.seeds[index].teams[0]) {
                              formik.values.seeds[index].teams[0].name =
                                target.value;
                            }
                          }}
                          renderOptions={
                            <React.Fragment>
                              <option value="">Select One</option>
                              {participants.map((participant) => (
                                <option
                                  key={participant.id}
                                  value={participant.name}
                                >
                                  {participant.name}
                                </option>
                              ))}
                            </React.Fragment>
                          }
                        />
                      </Container>
                      <Container className="flex-1">
                        <Select
                          placeholder="Select Participant"
                          name={
                            formik.values.seeds[index * 2 + 1]
                              ?.id as unknown as string
                          }
                          onChange={({ target }) => {
                            if (!!formik.values.seeds[index].teams[1]) {
                              formik.values.seeds[index].teams[1].name =
                                target.value;
                            }
                          }}
                          renderOptions={
                            <React.Fragment>
                              <option value="">Select One</option>
                              {participants.map((participant) => (
                                <option
                                  key={participant.id}
                                  value={participant.name}
                                >
                                  {participant.name}
                                </option>
                              ))}
                            </React.Fragment>
                          }
                        />
                      </Container>
                    </Container>
                  </Container>
                )
              )}

              <Container className="w-full flex items-center space-x-3">
                <Button
                //   type="submit"
                  onClick={() => {
                    setModalOpen(false);
                  }}
                  variant="secondary"
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  onClick={() => {
                    setValidationAttempt(true);
                    // if (
                    //   formik.errors.participants &&
                    //   formik.errors.participants.length <= 0
                    // ) {
                    //   setDialogOpen(true);
                    // }
                  }}
                  variant="primary"
                  className="flex-1"
                  isLoading={isLoading}
                >
                  Submit Pair
                </Button>
              </Container>

              <DialogModal
                isOpen={isDialogOpen}
                setOpen={setDialogOpen}
                onCancel={() => setDialogOpen(false)}
                onSuccess={() => formik.submitForm}
              >
                Did you ensure to confirm that a participant is not paired in
                multiple match?
              </DialogModal>
            </Container>
          </form>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default PairParticipants;
