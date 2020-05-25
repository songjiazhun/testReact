import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
declare let appManager: AppManagerPlugin.AppManager;
declare let titleBarManager:TitleBarPlugin.TitleBarManager;
const Tab2: React.FC = () => {
let initTitle=()=>{
    titleBarManager.setTitle("tab2");
    appManager.setVisible("show");
}
initTitle();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      
      </IonContent>
    </IonPage>
  );
};

export default Tab2;