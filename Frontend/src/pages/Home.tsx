import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import FechaHora from '../components/fechaHora';
import DatosCliente from '../components/DatosCliente';
import SeleccionMesa from '../components/SeleccionMesa';

const Home: React.FC = () => {
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
        <FechaHora/>
        <DatosCliente/>
        <SeleccionMesa/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
