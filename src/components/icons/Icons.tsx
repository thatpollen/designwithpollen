const WhatsApp = () => {
  return(
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
        fill="var(--color-charcoal)"
        d="M7.979 18.928l.305.18a8.346 8.346 0 004.256 1.166h.003c4.608 0 8.358-3.75 8.36-8.358a8.306 8.306 0 00-2.446-5.913 8.305 8.305 0 00-5.911-2.45c-4.612 0-8.362 3.748-8.364 8.356a8.337 8.337 0 001.278 4.448l.2.316-.845 3.084 3.164-.83zm-5.58 3.218l1.428-5.21a10.038 10.038 0 01-1.343-5.027C2.486 6.364 6.998 1.854 12.543 1.854a9.997 9.997 0 017.115 2.949 9.993 9.993 0 012.944 7.114c-.003 5.544-4.515 10.055-10.06 10.055h-.004c-1.683 0-3.337-.423-4.806-1.224l-5.333 1.398z"
      ></path>
      <path
        fill="var(--color-charcoal)"
        fillRule="evenodd"
        d="M9.925 7.602c-.188-.419-.386-.427-.565-.435l-.482-.005a.923.923 0 00-.67.314c-.23.251-.88.86-.88 2.096 0 1.237.9 2.431 1.026 2.6.126.167 1.739 2.786 4.294 3.793 2.123.837 2.555.67 3.016.629.46-.042 1.487-.608 1.696-1.195.21-.587.21-1.09.147-1.195-.063-.105-.23-.167-.482-.293-.252-.126-1.487-.734-1.718-.818-.23-.084-.397-.126-.565.126-.168.252-.649.818-.796.985-.146.168-.293.189-.544.063-.252-.125-1.061-.39-2.021-1.247-.748-.666-1.252-1.489-1.399-1.74-.147-.252-.015-.388.11-.513.114-.113.252-.294.378-.44.126-.147.167-.252.25-.42.085-.167.043-.314-.02-.44-.063-.125-.551-1.368-.775-1.865z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

const Arrow = () => {
   return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 20 20"
    >
      <mask
        id="mask0_103_8159"
        style={{ maskType: "alpha" }}
        width="20"
        height="20"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H20V20H0z"></path>
      </mask>
      <g mask="url(#mask0_103_8159)">
        <path
          fill="var(--color-dark-lime-green)"
          d="M13.125 10.75H4v-1.5h9.125L8.937 5.062 10 4l6 6-6 6-1.063-1.063 4.188-4.187z"
        ></path>
      </g>
    </svg>
  );
}

export { WhatsApp, Arrow }