import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
declare let appManager: AppManagerPlugin.AppManager;
declare let titleBarManager:TitleBarPlugin.TitleBarManager;
let initTitle=()=>{
  titleBarManager.setupMenuItems([]);
  titleBarManager.setBackgroundColor("#ff9f46");
  titleBarManager.setForegroundMode(0);
  titleBarManager.setNavigationMode(0);
  titleBarManager.setTitle("tab2");
  appManager.setVisible("show");
}
const Tab2: React.FC = () => {
  let [bgColor,setbgColor] = useState('lightBg');
  useEffect(()=>{
    initTitle();
 },[]);
  return (
    <IonPage>
      <IonContent>
         <div className={bgColor}></div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;