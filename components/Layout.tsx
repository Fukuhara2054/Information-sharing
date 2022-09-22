import { FC, memo, ReactNode, useState, createContext } from "react";
import Link from "next/link";
import styles from "../styles/Layout.module.scss";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import StarIcon from "@mui/icons-material/Star";
import {
  AppBar,
  Typography,
  Tabs
} from "@mui/material";
import { pink } from '@mui/material/colors';
import Add from "../components/add";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { app } from "./fire/fire";
import { getAuth, signOut } from "firebase/auth";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthContext } from "./context/AuthContext";
import { fontSize } from "@mui/system";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

//ReactNodeからReactElementに変えた
//もしかしたらここでエラー出るかも？
type Props = {
  children: React.ReactElement;
  title: string;
  window?: () => Window;
};

type Navigation = {
  pageName: string;
  path: string;
  icon: JSX.Element;
};

//スクロール時Appbarに影を作る
export const ElevationScroll: FC<Props> = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 5 : 0,
  });
};

//サイドバーのルーティング
const navigations: Navigation[] = [
  {
    pageName: "共有事項",
    path: "/",
    icon: <HomeIcon className={styles.icon} />,
  },
  {
    pageName: "質問箱",
    path: "/page2",
    icon: <InventoryIcon className={styles.icon} />,
  },
  {
    pageName: "お気に入り",
    path: "/page3",
    icon: <StarIcon className={styles.icon} />,
  },
  //   {
  //   pageName: "お気に入り",
  //   path: "/",
  //   icon: <HomeIcon className={styles.icon}/>
  // },
];
/* eslint-disable */
export const Layout: FC<Props> = memo((props) => {
  const router = useRouter();
  const [value, setValue] = useState('1');
  const [path, setPath] = useState(router.route);
  const auth = getAuth(app);
  const { } = useAuthContext();
  const handleLogout = async () => {
    await signOut(auth);
    await router.push("/login");
  };

  const { children } = props;
  //falseで初回レンダーでメニューを閉じた状態にできる
  const [menuOpen, setMenuOpen] = useState(true);
  const isPageActive = (pagePath: string): boolean => {
    return pagePath === String(router.route);
  };

  //質問箱、お気に入りのページ切り替え用
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={styles.root}>
      {/* サイドバーの記述 */}
      <aside
        className={styles.sidebar}
        style={{ width: menuOpen ? "200px" : "60px" }}
      >
        <div
          className={styles.hamburger}
          role="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[...Array(3)].map((_, index: number) => (
            <span
              className={
                menuOpen ? styles.menuCloseArrow : styles.menuOpenArrow
              }
              key={index}
            ></span>
          ))}
        </div>
        {navigations.map((navigation) => (
          <Link href={navigation.path} key={navigation.pageName}>
            <a
              className={styles.flexContainer}
              style={{
                background: isPageActive(navigation.path) ? "#0055FF" : "none",
              }}
            >
              {navigation.icon}
              {menuOpen && (
                <p className={styles.pageName}>{navigation.pageName}</p>
              )}
            </a>
          </Link>
        ))}
        <div className={styles.sidebarbottom}>
          <IconButton className={styles.logout} onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
          <p className={menuOpen ? styles.loginName : styles.loginNameNone}>
            {auth.currentUser?.displayName}
          </p>
        </div>
      </aside>
      {/* 右側コンテンツ部分の記述 */}
      <main className={styles.main}>
        {/* ヘッダー */}
        <div>
          <ElevationScroll {...props}>
            <AppBar
              position="sticky"
              sx={{
                backgroundColor: "white",
                color: "black",
              }}
            >
              <Typography className={styles.title}>{props.title}</Typography>
              <div>
                {/* {props.title === "質問箱" ? (
                  <div>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      variant="fullWidth"
                      TabIndicatorProps={{
                        style: {
                          backgroundColor: '#0022CC',
                          height: '3px'
                        }
                      }}
                      aria-label="secondary tabs example"
                    >
                      <Tab value="one" label="タイムライン" sx={{ fontSize: "17px" }} />
                      <Tab value="two" label="回答募集中" sx={{ fontSize: "17px" }} />
                    </Tabs>
                  </div>

                ) : (
                  <></>
                )}
                {props.title === "お気に入り" ? (
                  <div> */}
                    {/* <Tabs
                      value={value}
                      onChange={handleChange}
                      variant="fullWidth"
                      TabIndicatorProps={{
                        style: {
                          backgroundColor: '#0022CC',
                          height: '3px'
                        }
                      }}
                      aria-label="secondary tabs example"
                    >
                      <Tab value="one" label="共有事項" sx={{ fontSize: "17px" }} />
                      <Tab value="two" label="質問箱" sx={{ fontSize: "17px" }} />
                    </Tabs>
                    <TabPanel value="one">
                      Item One
                    </TabPanel> */}
                    {/* <Box sx={{ width: '100%', typography: 'body1' }}>
                      <TabContext value={value}>
                        <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                          <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                          </TabList>
                        </Box>
                        <TabPanel value="1">Item One</TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                      </TabContext>
                    </Box>
                  </div>
                ) : (
                  <></>
                )} */}
                <div className={styles.line}></div>
                <div className={styles.appbarbottom}>
                  {props.title === "お気に入り" ? (
                    <></>
                  ) : (
                    <Add path={path} />
                  )}
                  {/* <Search /> */}
                </div>
              </div>
            </AppBar>
          </ElevationScroll>

          <main className={styles.mainContent}>{children}</main>
        </div>
      </main>
    </div>
  );
});

/* eslint-enable */
