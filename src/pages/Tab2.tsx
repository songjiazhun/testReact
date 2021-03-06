import React, { useState } from 'react';
import { IonContent,IonPage, IonGrid} from '@ionic/react';
declare let appManager: AppManagerPlugin.AppManager;
declare let titleBarManager:TitleBarPlugin.TitleBarManager;
const Tab2: React.FC = () => {
  let titleBarForegroundMode={
    /** Title bar title and icons use a light (white) color. Use this on a dark background color. */
    LIGHT:0,
    /** Title bar title and icons use a dark (dark gray) color. Use this on a light background color. */
    DARK:1
  };
  let titleBarNavigationMode ={
  /** Home icon - minimizes the currently active app and returns to launcher. */
  HOME:0,
  /** Close icon - closes the currently active app and returns to the launcher. */
  CLOSE:1
 }
  let str = localStorage.getItem("bgColor") || "lightBg";
  let [bgColor,setbgColor] = useState(str);
  let initTitle=()=>{
    titleBarManager.setupMenuItems([]);
    titleBarManager.setBackgroundColor("#ff9f46");
    titleBarManager.setForegroundMode(titleBarForegroundMode.LIGHT);
    titleBarManager.setNavigationMode(titleBarNavigationMode.HOME);
    titleBarManager.setTitle("tab2");
    appManager.setVisible("show");
  }
  document.addEventListener("deviceready", ()=>{
    initTitle();
  }, false);
  return (
    <IonPage>
      <IonContent>
         <div className={bgColor}></div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;