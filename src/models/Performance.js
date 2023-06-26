class Performance {
  constructor(data) {
    this.kind = data.data.data.map(data => {
      switch (data.kind) {
        case 1:
          return { ...data, kind: "Cardio" };
        case 2:
          return { ...data, kind: "Energie" };
        case 3:
          return { ...data, kind: "Endurance" };
        case 4:
          return { ...data, kind: "Force" };
        case 5:
          return { ...data, kind: "Vitesse" };
        case 6:
          return { ...data, kind: "Intensité" };
        default:
          return { ...data };
      }
    });
  }
}

export default Performance;
