import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useRef } from "react";

type MediaProps = {
  close: () => void;
};

export const Media = ({ close }: MediaProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal if clicked outside of modal content
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [close]);

  return (
    <div className="media-modal-overlay">
      <div className="media-modal-content" ref={modalRef}>
        {/* Close Button */}
        <span role="button" className="close" onClick={close}>
          <Icon path={mdiWindowClose} size={1.5} />
        </span>

        {/* YouTube Video Embed */}
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/IRfuBJIy_3k?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
