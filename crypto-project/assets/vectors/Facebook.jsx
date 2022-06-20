const SvgComponent = (props) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M42.667 0H5.333C2.4 0 0 2.4 0 5.333v37.334C0 45.603 2.4 48 5.333 48H24V29.333h-5.333v-6.6H24v-5.466c0-5.771 3.232-9.824 10.043-9.824l4.808.005v6.947h-3.192c-2.651 0-3.659 1.989-3.659 3.834v4.507h6.848l-1.515 6.597H32V48h10.667C45.6 48 48 45.603 48 42.667V5.333C48 2.4 45.6 0 42.667 0Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
