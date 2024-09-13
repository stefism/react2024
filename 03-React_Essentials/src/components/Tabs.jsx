export default function Tabs({ children, buttons, ButtonsContainer }) {
  return (
    <>
      {/* ButtonsContainer (името си го избираме ние) - подава се от вън на компонента и указва какъв тип да бъде html 
      елемента.
        В случая ButtonsContainer е <menu></menu> елемент, но може да бъде и потребителски направен компонент.
        Ако е потребителски, трябва да се подаде като ButtonsContainer={Section} примерно.
        За да го отчете правилно, трябва да бъде написан с главна буква.
        Може да му дадем дефолтна стойност ButtonsContainer = "menu" и тогава от вън може да не му подаваме нищо.
      */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
