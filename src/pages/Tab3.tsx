import React, { useEffect, useState } from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonCard, IonContent, IonCardContent, IonCardTitle, IonCardHeader } from '@ionic/react';
declare let appManager: AppManagerPlugin.AppManager;
declare let titleBarManager:TitleBarPlugin.TitleBarManager;
let initTitle=()=>{
  titleBarManager.setupMenuItems([]);
  titleBarManager.setBackgroundColor("#ff9f46");
  titleBarManager.setForegroundMode(0);
  titleBarManager.setNavigationMode(0);
  titleBarManager.setTitle("tab3");
  appManager.setVisible("show");
}
const Tab3Page: React.FC = () => {
let [bgColor,setbgColor] = useState('lightBg');  
useEffect(()=>{
  initTitle();
},[]);
  return (
    <IonPage className='darkBg'>
      <IonContent>
        <div className={bgColor}>
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardTitle>Follow us on Telegram</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>https://t.me/elastosbrowser</p>
          </IonCardContent>
        </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
