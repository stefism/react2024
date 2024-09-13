export default function TabButton({ children, isSelected, ...props }) {
  // Тук с ...props, подаваме onClick директно на бутона
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}

// export default function TabButton(props) {
//   return (
//     <li>
//       <button className={props.isSelected ? "active" : ""} onClick={props.onSelect}>
//         {props.children}
//       </button>
//     </li>
//   );
// }
