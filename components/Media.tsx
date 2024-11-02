import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";

type MediaProps = {
  close: () => void;
};

export const Media = ({ close }: MediaProps) => {
  return (
    <section className="media-modal">
      <span role="button" className="close" onClick={close}>
        <Icon path={mdiWindowClose} size={1.5} />
      </span>
      <div className="media-modal-container">
        <iframe
          width="100%"
          height="315"
          src="https://youtu.be/Tj3BRFj1nVc"
            // src="https://www.youtube.com/embed/pMyVLLEqOkk?rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
