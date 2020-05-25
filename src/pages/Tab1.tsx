import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonPage,
  IonButton
} from '@ionic/react';
import React from 'react';
import './Tab1.css';
declare let appManager: AppManagerPlugin.AppManager;
declare let titleBarManager:TitleBarPlugin.TitleBarManager;
const Tab1:React.FC=()=>{

    let initTitle=()=>{
         titleBarManager.setTitle("tab1");
         titleBarManager.setupMenuItems([{'key':"test",'iconPath':'./assets/icon/favicon.png',title:'test'},
                                         {'key':"test1",'iconPath':'./assets/icon/favicon.png',title:'test1'}]);
        //  titleBarManager.addOnItemClickedListener((item)=>{
        //      console.log("==msg=="+JSON.stringify(item));
        //  });                                                              
         appManager.setVisible("show");
    }

    let tankaung = ()=>{
    alert("test");
    };
   initTitle();

  
    return (
      <IonPage>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Elastos!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              This starter project comes with simple tabs-based layout for apps that are going to primarily use a Tabbed UI.

              Take a look at the src/app/pages/ directory to add or change tabs, update any existing page or create new pages.

              A default header-bar-component has been created to show you how to use custom UI components. That components also makes use of Trinity's AppService plugin as a sample.
            </p>
            
            <IonButton onClick={tankaung}>test click</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
    );
  };

  export default Tab1;
