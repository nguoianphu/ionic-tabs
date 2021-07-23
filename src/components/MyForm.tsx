import React from 'react';
import { IonButton, IonCheckbox, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonTextarea } from '@ionic/react';
import { useState } from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const MyForm: React.FC<ContainerProps> = ({ name }) => {
  const [text, setText] = useState<string>();

  function myCoords(coords: string) {
    let regexpCoords = new RegExp('^[+ 0-9]{5}$');
    // console.log(coords.match(regexpCoords));
    // console.log(coords)
    // 41.651727,-0.881560

    var searchValue = coords;
    var regex = /^[+ 0-9]$/;
    // var regex = new RegExp('([-+]?)([\d]{1,2})(((\.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?)')
    var match = regex.exec(coords);
    // console.log('search results', coords);
    if (match) {
      // var coordinates = [parseFloat(match[1]), parseFloat(match[2])];
      console.log("MATCHED");
      console.log(match[0]);
      console.log(match[1]);
      console.log(match[2]);

      
      return coords;

    } else {

      return coords;

    }


  }

  return (
    <IonList>
      <IonItemDivider>All text</IonItemDivider>
      <IonItem>
        <IonTextarea clearOnEdit={true} value={text} onIonChange={e => { setText(e.detail.value!); myCoords(e.detail.value!) }}></IonTextarea>
      </IonItem>
      <IonItemDivider>Coords</IonItemDivider>
      <IonItem>
        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(myCoords(e.detail.value!))}></IonInput>
      </IonItem>

    </IonList>
  );
};



export default MyForm;

