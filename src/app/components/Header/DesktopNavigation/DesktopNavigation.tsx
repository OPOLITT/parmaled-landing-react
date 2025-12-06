import { LogotypeVertical } from "../../Logotype/LogotypeVertical";
import { navigationItems } from "../navigationItems";
import cls from "./DesktopNavigation.module.scss";

interface DesktopNavigationProps {
  onNavClick: (sectionId: string, itemId?: string) => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  onNavClick,
}) => {
  // Разделяем пункты меню: до логотипа и после
  const itemsBeforeLogo = navigationItems.slice(0, 2);
  const itemsAfterLogo = navigationItems.slice(2);

  return (
    <div className={cls.desktopNav}>
      <div className={cls.navLeft}>
        {itemsBeforeLogo.map((item) => (
          <button
            key={item.id}
            className={cls.navigationButton}
            onClick={() => onNavClick(item.sectionId, item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className={cls.logotypeWrapper}>
        <LogotypeVertical
          width={136}
          height={57}
          className={cls.logotype}
        />
      </div>

      <div className={cls.navRight}>
        {itemsAfterLogo.map((item) => (
          <button
            key={item.id}
            className={cls.navigationButton}
            onClick={() => onNavClick(item.sectionId, item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

