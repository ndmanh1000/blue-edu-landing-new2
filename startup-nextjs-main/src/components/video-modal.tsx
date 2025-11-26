"use client";

import { createPortal } from "react-dom";
import { useEffect } from "react";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
  | {
      channel: "youtube";
      videoId: string;
    }
  | {
      channel?: "custom";
      src: string;
    }
);

export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  let src = "";

  if (props.channel === "youtube") {
    // Add autoplay and other parameters for better YouTube experience
    src = `https://www.youtube.com/embed/${props.videoId}?autoplay=1&mute=0&rel=0&enablejsapi=1&playsinline=1&modestbranding=1`;
  } else {
    src = props.src;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-5xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Video Container */}
        <div className="relative overflow-hidden rounded-lg bg-gray-900 shadow-2xl">
          <div className="relative aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={src}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              frameBorder="0"
              className="absolute inset-0"
              title="Video player"
            />
          </div>
        </div>

        {/* Instructions */}
        <p className="mt-4 text-center text-sm text-white/70">
          Nhấn ESC hoặc click bên ngoài để đóng
        </p>
      </div>
    </div>,
    document.body,
  );
}
