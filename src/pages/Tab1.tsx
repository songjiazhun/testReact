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
import React, { useEffect, useState } from 'react';
import './Tab1.css';
declare let appManager: AppManagerPlugin.AppManager;
declare let titleBarManager:TitleBarPlugin.TitleBarManager;


const Tab1:React.FC=()=>{
    let [bgColor,setbgColor] = useState('lightBg');
    let [color,setColor] = useState('');
    let hanldeItem=(item:any)=>{
      switch(item.key){
        case 'test':
          appManager.sendIntentResponse('changeColor','ssssss',222222222,(msg)=>{
            alert('clicked:'+JSON.stringify(msg));
          },(err)=>{
             alert(JSON.stringify(err));
          });
          //setbgColor('darkBg');
          break;
        case 'test1':
          alert('clicked:'+item.title);
            break;  
      }
    }
    let initTitle=()=>{
      titleBarManager.setTitle("tab1");
      titleBarManager.setBackgroundColor("#ff9f46");
      titleBarManager.setForegroundMode(0);
      titleBarManager.setNavigationMode(0);
      titleBarManager.addOnItemClickedListener((clickitem)=>{      
        hanldeItem(clickitem);
      });
      titleBarManager.setupMenuItems([{'key':"test",'iconPath':'./assets/icon/favicon.png',title:'test'},
                                      {'key':"test1",'iconPath':'./assets/icon/favicon.png',title:'test1'}]);
                                      
      appManager.setIntentListener((msg)=>{
        alert(JSON.stringify(msg));
      });
      appManager.setVisible("show");
    }
    let tankaung = ()=>{
      appManager.sendIntentResponse('app',"ssssss",222222,(msg)=>{
        //alert('clicked:');
        setColor('red');
      },(err)=>{
         alert(JSON.stringify(err));
      });
      if(color === ''){
        setColor('red');
      }else{
        setColor('');
      }
     
    };
    useEffect(()=>{
       initTitle();
    },[]);
    return (
      <IonPage>
      <IonContent>
      <div className={bgColor}>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt=""/>
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
            
    <IonButton onClick={tankaung} className={color}>test click{color}</IonButton>
          </IonCardContent>
        </IonCard>
        </div>
      </IonContent>
   
    </IonPage>
    );
  };

  export default Tab1;
