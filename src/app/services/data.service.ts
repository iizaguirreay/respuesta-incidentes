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
      title: "Comunicación",
      description: "",
      icon: "fas fa-headset",
      backgroundcolor: "bg-comunicacion"
    },
    {
      id: 2,
      title: "Respuesta ante Incidentes",
      description: "",
      icon: "fas fa-user-md",
      backgroundcolor: "bg-respuesta-incidentes"
    },
    {
      id: 3,
      title: "Threath Hunting - Inteligencia de Amenazas",
      description: "Capacidad de recolección, análisis e intercambio de información acerca de las ciberamenazas existentes",
      icon: "fas fa-brain",
      backgroundcolor: "bg-threat-hunting"
    },
    {
      id: 4,
      title: "Monitorización",
      description: "",
      icon: "fas fa-desktop",
      backgroundcolor: "bg-monitorizacion"
    },
    {
      id: 5,
      title: "Gestión de Identidades",
      description: "",
      icon: "far fa-id-card",
      backgroundcolor: "bg-gestion-identidad"
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
      title: "Prevención de Amenazas",
      description: "Protección, prevención y bloqueo de amenazas avanzadas que pretendan comprometer los activos de la organización",
      icon: "fas fa-shield-alt",
      backgroundcolor: "bg-proteccion-amenazas"
    },
    {
      id: 8,
      title: "Plan de Continuidad",
      description: "Plan logístico que permite continuar la actividad de la empresa ante un ciberincidente que pueda provocar una interrupción en las operaciones críticas del negocio",
      icon: "fas fa-calendar-check",
      backgroundcolor: "bg-plan-continuidad"
    },
    {
      id: 9,
      title: "Formación y Concienciación",
      description: "",
      icon: "fas fa-graduation-cap",
      backgroundcolor: "bg-formacion"
    },
    {
      id: 10,
      title: "Control de Acceso Físico",
      description: "Mecanismo de seguridad que verifica la identidad y los permisos del individuo que desea acceder a un activo físico",
      icon:"fas fa-door-closed",
      backgroundcolor: "bg-acceso-fisico"
    },
    {
      id: 11,
      title: "Recursos Humanos",
      description: "Garantizar el bienestar laboral de los trabajadores para maximizar su productividad en la organización y evitar ataques internos de empleados",
      icon: "far fa-address-book",
      backgroundcolor: "bg-recursos-humanos"
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
        this.actions = this.comunicacion; 
        break; 
      } 
      case 2: { 
        this.actions = this.respuesta;
        break; 
      }
      case 3: { 
        this.actions = this.inteligencia;
        break; 
      }
      case 4: { 
        this.actions = this.monitorizacion;
        break;  
      }
      case 5: { 
        this.actions = this.identidad;
        break;  
      }
      case 6: { 
        this.actions = this.activos;
        break;  
      }
      case 7: { 
        this.actions = this.prevencion;
        break;  
      }
      case 8: { 
        this.actions = this.continuidad;
        break;  
      }
      case 9: { 
        this.actions = this.formacion;
        break;  
      }
      case 10: { 
        this.actions = this.fisico;
        break;  
      }
      case 11: { 
        this.actions = this.humanos;
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
      id: "CAAC0001",
      description: "Comunicación Interna"
    },
    {
      id: "CAAC0002",
      description: "Comunicación al CERT"
    },
    {
      id: "CAAC0003",
      description: "Comunicación a proveedores/clientes"
    },
    {
      id: "CAAC0004",
      description: "Comunicación a medios de difusión"
    },
    {
      id: "CAAC0005",
      description: "Comunicación a reguladores"
    },
    {
      id: "CAAC0006",
      description: "Comunicación a FFCCSE"
    },
    {
      id: "CAAC0007",
      description: "Definición estrategia de comunicación"
    },
    {
      id: "CAAC0008",
      description: "Nota de prensa"
    },
    {
      id: "CAAC0009",
      description: "Campaña en redes sociales"
    },
    {
      id: "CAAC0010",
      description: "Comunicación a la AEPD"
    }
  ];

  respuesta = [
    {
      id: "CAAC0011",
      description: "Aislar máquinas"
    },
    {
      id: "CAAC0012",
      description: "Análisis Forense"
    },
    {
      id: "CAAC0013",
      description: "Actualizar firmas malware"
    },
    {
      id: "CAAC0014",
      description: "Crear línea temporal"
    },
    {
      id: "CAAC0015",
      description: "Activar Comité de Crisis"
    },
    {
      id: "CAAC0016",
      description: "Análisis Forense del Jump Server"
    },
    {
      id: "CAAC0017",
      description: "Crear informe de seguimiento"
    },
    {
      id: "CAAC0018",
      description: "Bloqueo de tráfico (RDP)"
    },
    {
      id: "CAAC0019",
      description: "Instalar parches de seguridad"
    },
    {
      id: "CAAC0020",
      description: "Revisión física del equipo"
    }

  ];

  inteligencia = [
    {
      id: "CAAC0021",
      description: "Extracción de IOCs"
    },
    {
      id: "CAAC0022",
      description: "Enriquecimiento de IOCs"
    },
    {
      id: "CAAC0023",
      description: "Busqueda de IOCs"
    },
    {
      id: "CAAC0024",
      description: "Intercambio de información"
    }
  ];

  monitorizacion = [
    {
      id: "CAAC0025",
      description: "Monitorización Activa de Foro"
    },
    {
      id: "CAAC0026",
      description: "Revisión del registro de eventos (LOGS)"
    },
    {
      id: "CAAC0027",
      description: "Revisar eventos de tráfico de red"
    },
    {
      id: "CAAC0028",
      description: "Revisar alertas de DLP"
    }
  ];

  identidad = [
    {
      id: "CAAC0029",
      description: "Comprobar inventario de usuarios"
    }
  ];

  activos = [
    {
      id: "CAAC0030",
      description: "Consultar inventario de activos"
    },
    {
      id: "CAAC0031",
      description: "Establecer doble factor de autenticación"
    }
  ];

  prevencion = [
    {
      id: "CAAC0032",
      description: "Reglas detección y alertas"
    },
    {
      id: "CAAC0033",
      description: "Evaluar escenario de riesgo"
    },
    {
      id: "CAAC0034",
      description: "Reglas de bloqueo de email"
    }
  ];

  continuidad = [
    {
      id: "CAAC0035",
      description: "Restaurar activos (Mundo IT Main Site)"
    },
    {
      id: "CAAC0036",
      description: "Landing page alternativa"
    },
    {
      id: "CAAC0037",
      description: "Recuperación de las máquinas afectadas"
    },
    {
      id: "CAAC0038",
      description: "Restitución segura del activo"
    }
  ];

  formacion = [
    {
      id: "CAAC0039",
      description: "Concienciación Ingeniería Social"
    },
    {
      id: "CAAC0040",
      description: "Recomendaciones Buenas prácticas a los usuarios"
    }
  ];

  fisico = [
    {
      id: "CAAC0041",
      description: "Revisión accesos físicos"
    },
    {
      id: "CAAC0042",
      description: "Revisión cámaras de vigilancia"
    },
    {
      id: "CAAC0043",
      description: "Bloqueo de accesos físicos"
    }
  ];

  humanos = [
    {
      id: "CAAC0044",
      description: "Revisión del procedimiento de bajas"
    },
    {
      id: "CAAC0045",
      description: "Entrevista con ex-empleado"
    }
  ];
}
