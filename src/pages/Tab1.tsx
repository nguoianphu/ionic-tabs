import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MyForm from '../components/MyForm';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MyForm name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
