// src/components/FechaHora/FechaHora.tsx
import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonDatetime,
  IonButton,
  IonText
} from "@ionic/react";

const FechaHora: React.FC = () => {
  const [fechaHora, setFechaHora] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleConfirmar = () => {
    if (!fechaHora.trim()) {
      setError("❌ Por favor, seleccione una fecha y hora.");
      return;
    }
    alert(`✅ Fecha y hora seleccionada: ${new Date(fechaHora).toLocaleString()}`);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>🕓 Seleccionar Fecha y Hora</IonCardTitle>
      </IonCardHeader>

      <IonItem lines="inset">
        <IonLabel position="floating">📅 Fecha y Hora</IonLabel>
        <IonDatetime
          value={fechaHora}
          onIonChange={(e) => {
            setFechaHora(e.detail.value as string);
            setError("");
          }}
          presentation="date-time"
          preferWheel
        />
      </IonItem>

      {error && (
        <IonText color="danger" style={{ margin: "10px", display: "block" }}>
          {error}
        </IonText>
      )}

      <IonButton expand="block" color="tertiary" onClick={handleConfirmar}>
        ⏰ Confirmar Fecha y Hora
      </IonButton>
    </IonCard>
  );
};

export default FechaHora;
