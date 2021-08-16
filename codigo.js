var app = new Vue({
   el : "main",
   data:{
       grados :[0,1,2,3,4,5,6,7,8,9,10,11],
       materias :['Matemática','Español','Biologia','Deporte'],
       parentesco :['Padre','Madre','Tia','Tio','Hermana','Hermano'],
       tipo_sangre : ['A+','A-','B+','B-'],
       pagina_activa : null,

       escuela : {
         nombre : '',
         archivo : [],
         salones :[
            {
               grado : 0,
               descripcion : "Transición",
               alumnos : [],
            },
            {
                grado : 1,
                descripcion : "Primero",
                alumnos : [],
             },
             {
                grado : 2,
                descripcion : "Segundo",
                alumnos : [],
             },
             {
                grado : 3,
                descripcion : "Tercero",
                alumnos : [],
             },
             {
                grado : 4,
                descripcion : "Cuarto",
                alumnos : [],
             },
             {
                grado : 5,
                descripcion : "Quinto",
                alumnos : [],
             },
             {
                grado : 6,
                descripcion : "Sexto",
                alumnos : [],
             },
             {
                grado : 7,
                descripcion : "Septimo",
                alumnos : [],
             },
             {
                grado : 8,
                descripcion : "Octavo",
                alumnos : [],
             },
             {
                grado : 9,
                descripcion : "Noveno",
                alumnos : [],
             },
             {
                grado : 10,
                descripcion : "Decimo",
                alumnos : [],
             },
             {
                grado : 11,
                descripcion : "Undecimo",
                alumnos : [],
             },
         ],


       },

       grado_procesar : [],
       grado_escolar : null,

       Matricula_Estudiantes: [],
        estudiante :{
         identificacion : null,
           nombre : null,
           apellido : null,
           fecha_nacimiento : null,
           edad : null,
           direccion : null,
           data_escolar : {
               ultimo_grado : null,
               materia_preferida : null,
               ultimo_promedio : null,
           },      
            acudiente:{
                nombre_acudiente:null,
                apellido_acudiente:null,
                parentesco:null,
                celular1:null,
                celular2:null
             }, 
            datos_medicos:{
                tiposanguineo:null,
                alergico1:null,
                alergico2:null,
                enfermedad:null,
                cual:null
            }
            },
        ventanas :[true,false],
        activo : 0,
        titulo : 'CAPTURA DATOS ESTUDIANTE',
        msg_boton : "Guardar",
        edicion : false,
        pos_edicion : 0,
        

   },
   methods: {
       procesar(){
           switch (this.edicion) {
               case false:
                   this.guardar();
                   break;
              case true:this.editar(); break;// se habilita funcion editar en el codigo
               default:
                   break;
           }
       },
       guardar(){
    let resultado = JSON.parse(JSON.stringify(this.estudiante))
    this.Matricula_Estudiantes.push(resultado);
    this.limpiar();
       },

       limpiar()
       {
           this.estudiante.identificacion = null;
           this.estudiante.nombre = null;
           this.estudiante.apellido = null;
           this.estudiante.fecha_nacimiento = null;
           this.estudiante.edad = null;
           this.estudiante.direccion = null;
           this.estudiante.data_escolar.ultimo_grado = null;
           this.estudiante.data_escolar.materia_preferida = null;
           this.estudiante.data_escolar.ultimo_promedio = null;
           this.estudiante.acudiente.nombre_acudiente = null;
           this.estudiante.acudiente.apellido_acudiente = null;
           this.estudiante.acudiente.parentesco = null;
           this.estudiante.acudiente.celular1 = null;
           this.estudiante.acudiente.celular2 = null;
           this.estudiante.datos_medicos.tiposanguineo = null;
           this.estudiante.datos_medicos.alergico1 = null;
           this.estudiante.datos_medicos.alergico2 = null;
           this.estudiante.datos_medicos.enfermedad = null;
           this.estudiante.datos_medicos.cual = null;

       },
       carga_datos(){
        this.estudiante.identificacion = this.Matricula_Estudiantes[this.pos_edicion].identificacion;
        this.estudiante.nombre = this.Matricula_Estudiantes[this.pos_edicion].nombre;
        this.estudiante.apellido =  this.Matricula_Estudiantes[this.pos_edicion].apellido;
        this.estudiante.fecha_nacimiento =  this.Matricula_Estudiantes[this.pos_edicion].fecha_nacimiento;
        this.estudiante.edad =  this.Matricula_Estudiantes[this.pos_edicion].edad;
        this.estudiante.direccion =  this.Matricula_Estudiantes[this.pos_edicion].direccion;
        this.estudiante.data_escolar.ultimo_grado =  this.Matricula_Estudiantes[this.pos_edicion].data_escolar.ultimo_grado;
        this.estudiante.data_escolar.materia_preferida =  this.Matricula_Estudiantes[this.pos_edicion].data_escolar.materia_preferida;
        this.estudiante.data_escolar.ultimo_promedio =  this.Matricula_Estudiantes[this.pos_edicion].data_escolar.ultimo_promedio;
        this.estudiante.acudiente.nombre_acudiente = this.Matricula_Estudiantes[this.pos_edicion].acudiente.nombre_acudiente;
        this.estudiante.acudiente.apellido_acudiente = this.Matricula_Estudiantes[this.pos_edicion].acudiente.apellido_acudiente;
        this.estudiante.acudiente.parentesco = this.Matricula_Estudiantes[this.pos_edicion].acudiente.parentesco;
        this.estudiante.acudiente.celular1 = this.Matricula_Estudiantes[this.pos_edicion].acudiente.celular1;
        this.estudiante.acudiente.celular2 = this.Matricula_Estudiantes[this.pos_edicion].acudiente.celular1;
        this.estudiante.datos_medicos.tiposanguineo = this.Matricula_Estudiantes[this.pos_edicion].datos_medicos.tiposanguineo;
        this.estudiante.datos_medicos.alergico1 = this.Matricula_Estudiantes[this.pos_edicion].datos_medicos.alergico1;
        this.estudiante.datos_medicos.alergico2 = this.Matricula_Estudiantes[this.pos_edicion].datos_medicos.alergico2;
        this.estudiante.datos_medicos.enfermedad = this.Matricula_Estudiantes[this.pos_edicion].datos_medicos.enfermedad;
        this.estudiante.datos_medicos.cual = this.Matricula_Estudiantes[this.pos_edicion].datos_medicos.cual;
       },
       activar(v){
           if (v != 1)
            {
             this.ventanas[this.activo] = false;
             this.ventanas[v] = true;
             this.activo = v;
            }
          switch (v) {

            case 0:
                this.titulo = "CAPTURA DATOS ESTUDIANTE";
                this.msg_boton = "Guardar";
                this.edicion = false;
                this.limpiar();
                 break;
            case 1:
                if (this.Matricula_Estudiantes.length > 0)
                {
                this.titulo = "LISTADO DATOS ESTUDIANTE";
                this.msg_boton = "Editar";
                this.edicion = true;
                this.carga_datos();
                }
                break;
            case 2:
            if(this.grado_escolar == 0){ //Solo funcionara si no se escoge la opción de ultimo grado en la prematricula.
               this.grado_procesar = this.Matricula_Estudiantes.filter((est) => est.data_escolar.ultimo_grado  == null ); 
            };
            if(this.grado_escolar == 1){
               this.grado_procesar = this.Matricula_Estudiantes.filter((est) => est.data_escolar.ultimo_grado  < 1 && est.data_escolar.ultimo_grado == 0); 
            };
            if(this.grado_escolar == 2  ){
               this.grado_procesar = this.Matricula_Estudiantes.filter((est) => est.data_escolar.ultimo_grado  < 2 && est.data_escolar.ultimo_grado  > 0); 
            };
            if(this.grado_escolar == 3 ){
               this.grado_procesar = this.Matricula_Estudiantes.filter((est) => est.data_escolar.ultimo_grado  < 3 && est.data_escolar.ultimo_grado  > 1); 
            };
            if(this.grado_escolar == 4  ){
               this.grado_procesar = this.Matricula_Estudiantes.filter((est) => est.data_escolar.ultimo_grado  < 4 && est.data_escolar.ultimo_grado  > 2); 
            };
            if(this.grado_escolar == 5  ){
               this.grado_procesar = this.Matricula_Estudiantes.filter((est) => est.data_escolar.ultimo_grado  < 5 && est.data_escolar.ultimo_grado  > 3); 
            };
            if(this.grado_escolar == 6  ){
               this.grado_procesar = this.Matricula_Estudiantes.filter((est) => est.data_escolar.ultimo_grado  < 6 && est.data_escolar.ultimo_grado  > 4); 
            };
            if(this.grado_escolar == 7  ){
               this.grado_procesar = this.Matricula_Estudiantes.filter((est) => est.data_escolar.ultimo_grado  < 7 && est.data_escolar.ultimo_grado  > 5); 
            };
            if(this.grado_escolar == 8  ){
               this.grado_procesar = this.Matricula_Estudiantes.filter((est) => est.data_escolar.ultimo_grado  < 8 && est.data_escolar.ultimo_grado  > 6); 
            };
            if(this.grado_escolar == 9  ){
               this.grado_procesar = this.Matricula_Estudiantes.filter((est) => est.data_escolar.ultimo_grado  < 9 && est.data_escolar.ultimo_grado  > 7); 
            };
            if(this.grado_escolar == 10  ){
               this.grado_procesar = this.Matricula_Estudiantes.filter((est) => est.data_escolar.ultimo_grado  < 10 && est.data_escolar.ultimo_grado  > 8); 
            };
            if(this.grado_escolar == 11 ){
               this.grado_procesar = this.Matricula_Estudiantes.filter((est) => est.data_escolar.ultimo_grado  < 11 && est.data_escolar.ultimo_grado  > 9); 
            };
                    break;
                
             
          }
          },
          siguiente(){
          if (this.pos_edicion < this.Matricula_Estudiantes.length -1)
          {
          this.pos_edicion++;
          this.carga_datos();
       }
       },
       anterior(){
        if (this.pos_edicion > 0)
        {
         this.pos_edicion--;
         this.carga_datos();
        }
       },
       editar(){//funcion editar
        let Aidentificacion = this.identificacion;
        let Anombre = this.estudiante.nombre;
        let Aapellido = this.estudiante.apellido;
        let Afecha = this.estudiante.fecha_nacimiento;
        let Aedad = this.estudiante.edad;
        let Adireccion = this.estudiante.direccion;
        let Agrado = this.estudiante.data_escolar.ultimo_grado;
        let Amateria = this.estudiante.data_escolar.materia_preferida;
        let Apromedio = this.estudiante.data_escolar.ultimo_promedio;
        let AnombreAcu = this.estudiante.acudiente.nombre_acudiente;
        let AapellidoAcu = this.estudiante.acudiente.apellido_acudiente;
        let Aparentesco = this.estudiante.acudiente.parentesco;
        let Acelular1 = this.estudiante.acudiente.celular1;
        let Acelular2 = this.estudiante.acudiente.celular2;
        let ATsangre = this.estudiante.datos_medicos.tiposanguineo;
        let Aalergico1 = this.estudiante.datos_medicos.alergico1;
        let Aalergico2 = this.estudiante.datos_medicos.alergico2;
        let Aenfermedad = this.estudiante.datos_medicos.enfermedad;
        let Acual = this.estudiante.datos_medicos.cual;
       this.Matricula_Estudiantes[this.pos_edicion].identificacion = Aidentificacion;
       this.Matricula_Estudiantes[this.pos_edicion].nombre = Anombre;
       this.Matricula_Estudiantes[this.pos_edicion].apellido = Aapellido;
       this.Matricula_Estudiantes[this.pos_edicion].fecha_nacimiento = Afecha;
       this.Matricula_Estudiantes[this.pos_edicion].edad = Aedad;
       this.Matricula_Estudiantes[this.pos_edicion].direccion = Adireccion;
       this.Matricula_Estudiantes[this.pos_edicion].data_escolar.ultimo_grado = Agrado;
       this.Matricula_Estudiantes[this.pos_edicion].data_escolar.materia_preferida = Amateria;
       this.Matricula_Estudiantes[this.pos_edicion].data_escolar.ultimo_promedio = Apromedio;
       this.Matricula_Estudiantes[this.pos_edicion].acudiente.nombre_acudiente = AnombreAcu;
       this.Matricula_Estudiantes[this.pos_edicion].acudiente.apellido_acudiente = AapellidoAcu;
       this.Matricula_Estudiantes[this.pos_edicion].acudiente.parentesco = Aparentesco;
       this.Matricula_Estudiantes[this.pos_edicion].acudiente.celular1 = Acelular1;
       this.Matricula_Estudiantes[this.pos_edicion].acudiente.celular2 = Acelular2;
       this.Matricula_Estudiantes[this.pos_edicion].datos_medicos.tiposanguineo = ATsangre;
       this.Matricula_Estudiantes[this.pos_edicion].datos_medicos.alergico1 =Aalergico1 ;
       this.Matricula_Estudiantes[this.pos_edicion].datos_medicos.alergico2 =Aalergico2 ;
       this.Matricula_Estudiantes[this.pos_edicion].datos_medicos.enfermedad =Aenfermedad;
       this.Matricula_Estudiantes[this.pos_edicion].datos_medicos.cual = Acual;
      alert("Registro editado exitosamente");
       this.activar(0);
       },
       Matricular(){
        this.escuela.archivo.unshift( this.Matricula_Estudiantes[0]) 
        this.Matricula_Estudiantes.splice(0,1);
         if ( this.grado_escolar == 0 ) { 
               this.escuela.salones[0].alumnos.unshift(this.escuela.archivo[0].identificacion).identificacion; 
            }
            if ( this.grado_escolar == 1 ) { 
               this.escuela.salones[1].alumnos.unshift(this.escuela.archivo[0].identificacion).identificacion; 
            }
            if ( this.grado_escolar == 2 ) { 
               this.escuela.salones[2].alumnos.unshift(this.escuela.archivo[0].identificacion).identificacion; 
            }
            if ( this.grado_escolar == 3 ) { 
               this.escuela.salones[3].alumnos.unshift(this.escuela.archivo[0].identificacion).identificacion; 
            }
            if ( this.grado_escolar == 4 ) { 
               this.escuela.salones[4].alumnos.unshift(this.escuela.archivo[0].identificacion).identificacion; 
            }
            if ( this.grado_escolar == 5 ) { 
               this.escuela.salones[5].alumnos.unshift(this.escuela.archivo[0].identificacion).identificacion; 
            }
            if ( this.grado_escolar == 6 ) { 
               this.escuela.salones[6].alumnos.unshift(this.escuela.archivo[0].identificacion).identificacion; 
            }
            if ( this.grado_escolar == 7 ) { 
               this.escuela.salones[7].alumnos.unshift(this.escuela.archivo[0].identificacion).identificacion; 
            }
            if ( this.grado_escolar == 8 ) { 
               this.escuela.salones[8].alumnos.unshift(this.escuela.archivo[0].identificacion).identificacion; 
            }
            if ( this.grado_escolar == 9 ) { 
               this.escuela.salones[9].alumnos.unshift(this.escuela.archivo[0].identificacion).identificacion; 
            }
            if ( this.grado_escolar == 10 ) { 
               this.escuela.salones[10].alumnos.unshift(this.escuela.archivo[0].identificacion).identificacion; 
            }
            if ( this.grado_escolar == 11 ) { 
               this.escuela.salones[11].alumnos.unshift(this.escuela.archivo[0].identificacion).identificacion; 
            }
         console.log(this.escuela.archivo);
         this.activar(2);
         /* en esta funcion.La posicion inicial del array se guarda.
         por lo que hay que  matricular el ultimo estudinte prematriculado.
         y si son barios; hay que matricularlo en el mismo orden como se prematriculo.
         */
       },
       Cancelar(){         
         this.Matricula_Estudiantes.splice(0,1); /*está función trabaja de la misma menera que la anterior. 
         El ultimo estudiante prematriculado es el que se pude eliminar.*/
         this.activar(2); 
       },
       /*si no hece de esta forma puede que se guarde la identificación 
       en otro grado. Pero si se hace lo dicho en los ultimos dos parrafos
       el codigo cumple con lo pedido en la ctividad. */

   }
})