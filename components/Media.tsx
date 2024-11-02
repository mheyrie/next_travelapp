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
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-slate-700/50">
      <div className="relative p-5 rounded-md max-w-[90%] w-[800px]" ref={modalRef}>
        {/* Close Button */}
        <span role="button" className="absolute top-5 right-6 cursor-pointer text-white" onClick={close}>
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
