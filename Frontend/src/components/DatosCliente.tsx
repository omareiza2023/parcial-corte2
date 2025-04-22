import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText
} from "@ionic/react";

const DatosCliente: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");

  const validarCampos = () => {
    if (!nombre.trim() || !correo.trim() || !telefono.trim()) {
      setError("❌ Todos los campos son obligatorios.");
      return;
    }
    setError("");
    alert(`✅ Datos registrados:\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}`);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>👤 Datos del Cliente</IonCardTitle>
      </IonCardHeader>

      <IonItem>
        <IonLabel position="floating">✍ Nombre</IonLabel>
        <IonInput
          value={nombre}
          onIonChange={(e) => {
            setNombre(e.detail.value!);
            setError("");
          }}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">📧 Correo</IonLabel>
        <IonInput
          type="email"
          value={correo}
          onIonChange={(e) => {
            setCorreo(e.detail.value!);
            setError("");
          }}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">📞 Teléfono</IonLabel>
        <IonInput
          type="tel"
          value={telefono}
          onIonChange={(e) => {
            setTelefono(e.detail.value!);
            setError("");
          }}
        />
      </IonItem>

      {error && (
        <IonText color="danger" style={{ margin: "10px", display: "block" }}>
          {error}
        </IonText>
      )}

      <IonButton expand="block" color="success" onClick={validarCampos}>
        💾 Guardar Datos
      </IonButton>
    </IonCard>
  );
};

export default DatosCliente;