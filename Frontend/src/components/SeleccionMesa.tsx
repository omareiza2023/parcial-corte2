// src/components/SeleccionMesa/SeleccionMesa.tsx
import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonText
} from "@ionic/react";

const SeleccionMesa: React.FC = () => {
  const [mesa, setMesa] = useState<string>("");
  const [error, setError] = useState<string>("");

  const mesasDisponibles = Array.from({ length: 10 }, (_, i) => `Mesa ${i + 1}`);

  const handleConfirmar = () => {
    if (!mesa) {
      setError("❌ Por favor, seleccione una mesa.");
      return;
    }
    setError("");
    alert(`✅ Mesa seleccionada: ${mesa}`);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>🍽️ Selección de Mesa</IonCardTitle>
      </IonCardHeader>

      <IonItem>
        <IonLabel>Seleccione una mesa</IonLabel>
        <IonSelect
          value={mesa}
          placeholder="Elegir..."
          onIonChange={(e) => {
            setMesa(e.detail.value);
            setError("");
          }}
        >
          {mesasDisponibles.map((mesa, index) => (
            <IonSelectOption key={index} value={mesa}>
              {mesa}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>

      {error && (
        <IonText color="danger" style={{ margin: "10px", display: "block" }}>
          {error}
        </IonText>
      )}

      <IonButton expand="block" color="warning" onClick={handleConfirmar}>
        ✅ Confirmar Mesa
      </IonButton>
    </IonCard>
  );
};

export default SeleccionMesa;
