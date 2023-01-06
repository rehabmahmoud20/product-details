import { Button, Modal } from "flowbite-react";
import ReactStars from "react-rating-stars-component";

export const RatingModal = ({ showModal, handleShowModal }) => {
  return (
    <>
      <Modal
        show={showModal}
        size="md"
        popup={true}
        onClose={() => {
          handleShowModal(!showModal);
        }}
      >
        <Modal.Header />
        <Modal.Body>
          <p className=" text-center text-2xl"> please rate the product </p>
          <div className="  mx-auto w-fit mb-4 ">
            <ReactStars
              count={5}
              size={24}
              activeColor="#1E429F"
              isHalf={true}
            />
          </div>
          <div className="flex justify-center gap-4">
            <Button
              color="success"
              onClick={() => {
                handleShowModal(!showModal);
              }}
            >
              Rate
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
