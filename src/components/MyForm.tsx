import { IonButton, IonCheckbox, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonTextarea } from '@ionic/react';
import { useState } from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const MyForm: React.FC<ContainerProps> = ({ name }) => {
  const [text, setText] = useState<string>();
  return (
    <IonList>
      <IonItemDivider>All text</IonItemDivider>
      <IonItem>
        <IonTextarea clearOnEdit={true}  value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
      </IonItem>

      <IonItemDivider>Coords</IonItemDivider>
      <IonItem>
        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
      </IonItem>

    </IonList>
  );
};

export default MyForm;

