import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private groupId: number = 0;
  private currentGroup: any;

  constructor() { }

  private actions = [{}];
  private grupos = [
    {
      id: 1,
      title: "Recursos Humanos",
      description: "Garantizar el bienestar laboral de los trabajadores para maximizar su productividad en la organización y evitar ataques internos de empleados",
      icon: "far fa-address-book",
      backgroundcolor: "bg-recursos-humanos"
    },
    {
      id: 2,
      title: "Formación y Concienciación",
      description: "",
      icon: "fas fa-graduation-cap",
      backgroundcolor: "bg-formacion"
    },
    {
      id: 3,
      title: "Control de Acceso Físico",
      description: "Mecanismo de seguridad que verifica la identidad y los permisos del individuo que desea acceder a un activo físico",
      icon:"fas fa-door-closed",
      backgroundcolor: "bg-acceso-fisico"
    },
    {
      id: 4,
      title: "Threath Hunting - Inteligencia de Amenazas",
      description: "Capacidad de recolección, análisis e intercambio de información acerca de las ciberamenazas existentes",
      icon: "fas fa-brain",
      backgroundcolor: "bg-threat-hunting"
    },
    {
      id: 5,
      title: "Monitorización",
      description: "",
      icon: "fas fa-desktop",
      backgroundcolor: "bg-monitorizacion"
    },
    {
      id: 6,
      title: "Gestión de Activos",
      description: "",
      icon: "fas fa-list",
      backgroundcolor: "bg-gestion-activos"
    },
    {
      id: 7,
      title: "Gestión de Identidades",
      description: "",
      icon: "far fa-id-card",
      backgroundcolor: "bg-gestion-identidad"
    },
    {
      id: 8,
      title: "Respuesta ante Incidentes",
      description: "",
      icon: "fas fa-user-md",
      backgroundcolor: "bg-respuesta-incidentes"
    },
    {
      id: 9,
      title: "Comunicación",
      description: "",
      icon: "fas fa-headset",
      backgroundcolor: "bg-comunicacion"
    },
    {
      id: 10,
      title: "Plan de Continuidad",
      description: "Plan logístico que permite continuar la actividad de la empresa ante un ciberincidente que pueda provocar una interrupción en las operaciones críticas del negocio",
      icon: "fas fa-calendar-check",
      backgroundcolor: "bg-plan-continuidad"
    },
    {
      id: 11,
      title: "Prevención de Amenazas",
      description: "Protección, prevención y bloqueo de amenazas avanzadas que pretendan comprometer los activos de la organización",
      icon: "fas fa-shield-alt",
      backgroundcolor: "bg-proteccion-amenazas"
    }
  ];

  getActions(){
    return this.actions;
  }
  getGrupos(){
    return this.grupos;
  }

  setGroupId(id:number){
    this.groupId = id;
  }
  setGroup(grupo: any){
    this.currentGroup = grupo;
  }
  getCurrentGroup(){
    return this.currentGroup;
  }

  setActions(){
    switch(this.groupId) { 
      case 0: { 
        this.actions = [{}];
        break;  
      }
      case 1: { 
        this.actions = this.humanos; 
        break; 
      } 
      case 2: { 
        this.actions = this.formacion;
        break; 
      }
      case 3: { 
        this.actions = this.fisico;
        break; 
      }
      case 4: { 
        this.actions = this.inteligencia;
        break;  
      }
      case 5: { 
        this.actions = this.monitorizacion;
        break;  
      }
      case 6: { 
        this.actions = this.activos;
        break;  
      }
      case 7: { 
        this.actions = this.identidad;
        break;  
      }
      case 8: { 
        this.actions = this.respuesta;
        break;  
      }
      case 9: { 
        this.actions = this.comunicacion;
        break;  
      }
      case 10: { 
        this.actions = this.continuidad;
        break;  
      }
      case 11: { 
        this.actions = this.prevencion;
        break;  
      }
      default: { 
         this.actions = [{}];
         break; 
      } 
   }
  }

  comunicacion = [
    {
      id: "CAAC0000",
      description: "Comunicación Interna"
    },
    {
      id: "CAAC0001",
      description: "Comunicación al CERT"
    },
    {
      id: "CAAC0002",
      description: "Comunicación a proveedores/clientes"
    },
    {
      id: "CAAC0003",
      description: "Comunicación a medios de difusión"
    },
    {
      id: "CAAC0004",
      description: "Comunicación a reguladores"
    },
    {
      id: "CAAC0005",
      description: "Comunicación a FFCCSE"
    },
    {
      id: "CAAC0006",
      description: "Definición estrategia de comunicación"
    },
    {
      id: "CAAC0013",
      description: "Nota de prensa"
    },
    {
      id: "CAAC0014",
      description: "Campaña en redes sociales"
    },
    {
      id: "CAAC0052",
      description: "Comunicación a la AEPD"
    }
  ];

  respuesta = [
    {
      id: "CAAC0007",
      description: "Aislar máquinas"
    },
    {
      id: "CAAC0008",
      description: "Análisis Forense"
    },
    {
      id: "CAAC0018",
      description: "Actualizar firmas malware"
    },
    {
      id: "CAAC0019",
      description: "Crear línea temporal"
    },
    {
      id: "CAAC0021",
      description: "Activar Comité de Crisis"
    },
    {
      id: "CAAC0022",
      description: "Análisis Forense del Jump Server"
    },
    {
      id: "CAAC0031",
      description: "Crear informe de seguimiento"
    },
    {
      id: "CAAC0032",
      description: "Bloqueo de tráfico (RDP)"
    },
    {
      id: "CAAC0033",
      description: "Instalar parches de seguridad"
    },
    {
      id: "CAAC0077",
      description: "Revisión física del equipo"
    }

  ];

  inteligencia = [
    {
      id: "CAAC0009",
      description: "Extracción de IOCs"
    },
    {
      id: "CAAC0010",
      description: "Enriquecimiento de IOCs"
    },
    {
      id: "CAAC0012",
      description: "Busqueda de IOCs"
    },
    {
      id: "CAAC0020",
      description: "Intercambio de información"
    }
  ];

  monitorizacion = [
    {
      id: "CAAC0011",
      description: "Monitorización Activa de Foro"
    },
    {
      id: "CAAC0049",
      description: "Revisión del registro de eventos (LOGS)"
    },
    {
      id: "CAAC0054",
      description: "Revisar eventos de tráfico de red"
    },
    {
      id: "CAAC0056",
      description: "Revisar alertas de DLP"
    }
  ];

  identidad = [
    {
      id: "CAAC0015",
      description: "Comprobar inventario de usuarios"
    }
  ];

  activos = [
    {
      id: "CAAC0016",
      description: "Consultar inventario de activos"
    },
    {
      id: "CAAC0037",
      description: "Establecer doble factor de autenticación"
    }
  ];

  prevencion = [
    {
      id: "CAAC0017",
      description: "Reglas detección y alertas"
    },
    {
      id: "CAAC0030",
      description: "Evaluar escenario de riesgo"
    },
    {
      id: "CAAC0041",
      description: "Reglas de bloqueo de email"
    }
  ];

  continuidad = [
    {
      id: "CAAC0023",
      description: "Restaurar activos (Mundo IT Main Site)"
    },
    {
      id: "CAAC0042",
      description: "Landing page alternativa"
    },
    {
      id: "CAAC0053",
      description: "Recuperación de las máquinas afectadas"
    },
    {
      id: "CAAC0085",
      description: "Restitución segura del activo"
    }
  ];

  formacion = [
    {
      id: "CAAC0034",
      description: "Concienciación Ingeniería Social"
    },
    {
      id: "CAAC0055",
      description: "Recomendaciones Buenas prácticas a los usuarios"
    }
  ];

  fisico = [
    {
      id: "CAAC0044",
      description: "Revisión accesos físicos"
    },
    {
      id: "CAAC0045",
      description: "Revisión cámaras de vigilancia"
    },
    {
      id: "CAAC0046",
      description: "Bloqueo de accesos físicos"
    }
  ];

  humanos = [
    {
      id: "CAAC0047",
      description: "Revisión del procedimiento de bajas"
    },
    {
      id: "CAAC0048",
      description: "Entrevista con ex-empleado"
    }
  ];
}
