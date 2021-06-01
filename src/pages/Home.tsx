import { getPlatforms, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Keyboard, KeyboardInfo } from '@capacitor/keyboard';

const Home: React.FC = () => {

  if (getPlatforms().indexOf('mobile') !== -1 && Keyboard) {
    console.log('mobile platform detected');
    Keyboard.addListener('keyboardWillShow', (info: KeyboardInfo) => {
      console.log('keyboard will show');
    });

    Keyboard.addListener('keyboardWillHide', () => {
      console.log('keyboard will hide');
    });
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
