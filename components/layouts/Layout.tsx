import { FC, memo, ReactNode, useState } from "react";
import Link from "next/link";
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from '@mui/icons-material/Inventory';
import StarIcon from '@mui/icons-material/Star';


type Props = {
  children: ReactNode;
}

type Navigation = {
  pageName: string;
  path: string;
  icon: JSX.Element;
}

const navigations: Navigation[] = [
  {
    pageName: "共有事項",
    path: "/",
    icon: <HomeIcon className={styles.icon}/>
  },
  {
    pageName: "質問箱",
    path: "/page2",
    icon: <InventoryIcon className={styles.icon}/>
  },
  {
    pageName: "お気に入り",
    path: "/page3",
    icon: <StarIcon className={styles.icon}/>
  },
//   {
//     pageName: "...",
//     path: "/page4",
//     icon: <HomeIcon className={styles.icon}/>
//   },

]

// FC = Function Component 関数コンポーネントを定義
export const Layout: FC<Props> = memo((props) => {

  const { children } = props;

  const [ menuOpen, setMenuOpen ] = useState(true);

  const router = useRouter();

  const isPageActive = (pagePath: string): boolean => {
    return pagePath === String(router.route)
  }


  return (
    <div className={styles.root}>

      <aside className={styles.sidebar} style={{ width: menuOpen ? "200px" : "60px" }}>
        <div className={styles.hamburger} role="button" onClick={() => setMenuOpen(!menuOpen)}>
          {[...Array(3)].map((_, index: number) => (
            <span className={menuOpen ? styles.menuCloseArrow : styles.menuOpenArrow} key={index}></span>
          ))}
        </div>
        {navigations.map((navigation) => (
          <Link href={navigation.path} key={navigation.pageName}>
            <a
              className={styles.flexContainer}
              style={{ background: isPageActive(navigation.path) ? "#969BBE" : "none" }}>
              { navigation.icon }
              { menuOpen && <p className={styles.pageName}>{ navigation.pageName }</p> }
            </a>
          </Link>
        ))}
      </aside>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  )
})