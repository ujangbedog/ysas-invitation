import React, { useRef, useState, useEffect } from 'react';

export const useAudio = (urlAudio: any) => {
  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio(urlAudio) : undefined
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (!audio.current) return;

    playing ? audio.current.play() : audio.current.pause();

    return () => {
      audio.current?.pause();
    };
  }, [playing]);

  useEffect(() => {
    if (!audio.current) return;

    const handleAudioEnd = () => {
      setPlaying(false);
      setTimeout(() => {
        setPlaying(true);
      }, 2000);
    };

    audio.current.addEventListener('ended', handleAudioEnd);

    return () => {
      audio.current?.removeEventListener('ended', handleAudioEnd);
    };
  }, []);

  useEffect(() => {
    if (!audio.current) return;

    audio.current.preload = 'none'; // Set preload attribute to "none" to prevent automatic download
    audio.current.src = urlAudio;

    return () => {
      audio.current?.pause();
    };
  }, [urlAudio]);

  return [playing, setPlaying, toggle];
};

export const getRandomColor = () => {
  let letters = 'BCDEF'.split('');
  let color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
};
