import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient({ log: ["query"] })

//Se crea los datos que se van a insertar en los modelos cada vez que se levante el proyecto
async function main() {

    await prisma.cargo.createMany({
        data: [
          {nombre: 'Administrador'},
          {nombre: 'Usuario'},
          {nombre: 'Estudiante'},
          {nombre: 'Profesor'},
          {nombre: 'invitado'},
        ],
      });
      await prisma.carrera.createMany({
        data: [
          { nombre: "Ingeniería en Sistemas", especialidad: "Tecnología y Desarrollo de Software" },
          { nombre: "Administración de Empresas", especialidad: "Gestión Empresarial y Finanzas" },
          { nombre: "Medicina", especialidad: "Ciencias de la Salud" },
          { nombre: "Derecho", especialidad: "Ciencias Jurídicas y Legislación" },
          { nombre: "Arquitectura", especialidad: "Diseño y Construcción" },
          { nombre: "Psicología", especialidad: "Ciencias del Comportamiento Humano" },
          { nombre: "Ingeniería Industrial", especialidad: "Optimización de Procesos y Producción" },
          { nombre: "Diseño Gráfico", especialidad: "Creatividad y Comunicación Visual" },
          { nombre: "Nulo", especialidad: "Nulo" },
        ],
      });

      await prisma.usuario.createMany({
        data: [
          { cedula: '702960101', nombre:'Andrey', apellidos:'Jimenez Porras', fecha_nacimiento: '1990-05-12', correo: 'rajimenezp35@gmail.com', contrasena:'123456', id_cargo: 1, id_carrera: 9 },
          { cedula: '809129371', nombre:'Marco', apellidos:'Fernandez Lopez', fecha_nacimiento: '1985-08-23', correo: 'jimenezp@gmail.com', contrasena:'123456', id_cargo: 2, id_carrera: 9 },
          { cedula: '102302331', nombre:'Olivia', apellidos:'Porras Rodriguez', fecha_nacimiento: '1998-11-15', correo: 'ra@gmail.com', contrasena:'123456', id_cargo: 3, id_carrera: 1 },
          { cedula: '102987191', nombre:'Francisca', apellidos:'Vargas Coto', fecha_nacimiento: '1979-06-30', correo: 'farmlopez@gmail.com', contrasena:'123456', id_cargo: 4, id_carrera: 9 },
          { cedula: '278320991', nombre:'Mauricio', apellidos:'Vargas Gonzalez', fecha_nacimiento: '1992-03-27', correo: 'rajimenezp35@gmail.com', contrasena:'123456', id_cargo: 4, id_carrera: 9 },
          { cedula: '278321211', nombre:'Mauricio', apellidos:'Vargas Gonzalez', fecha_nacimiento: '1992-03-27', correo: 'rajimenezp35@gmail.com', contrasena:'123456', id_cargo: 4, id_carrera: 9 },
          { cedula: "502839101", nombre: "Sebastián", apellidos: "Ramírez Soto", fecha_nacimiento: "2000-09-10", correo: "sebastianrs@gmail.com", contrasena: "123456", id_cargo: 4, id_carrera: 9 },
          { cedula: "603910283", nombre: "Valeria", apellidos: "Sánchez Mora", fecha_nacimiento: "1997-12-05", correo: "valeriasm@gmail.com", contrasena: "123456", id_cargo: 3, id_carrera: 3 },
          { cedula: "809312874", nombre: "Esteban", apellidos: "Gómez Fernández", fecha_nacimiento: "1989-07-22", correo: "estebangf@gmail.com", contrasena: "123456", id_cargo: 4, id_carrera: 9 },
          { cedula: "927310928", nombre: "Camila", apellidos: "Castro Rojas", fecha_nacimiento: "1995-04-18", correo: "camilacr@gmail.com", contrasena: "123456", id_cargo: 4, id_carrera: 9 },
          { cedula: "321890765", nombre: "Felipe", apellidos: "Navarro Jiménez", fecha_nacimiento: "1996-01-08", correo: "felipen@gmail.com", contrasena: "123456", id_cargo: 3, id_carrera: 3 },
          { cedula: "187603945", nombre: "Daniela", apellidos: "Ureña Pineda", fecha_nacimiento: "1999-10-14", correo: "danielaup@gmail.com", contrasena: "123456", id_cargo: 3, id_carrera: 4 },
          { cedula: "598210374", nombre: "Joaquín", apellidos: "León Solís", fecha_nacimiento: "1988-06-09", correo: "joaquinls@gmail.com", contrasena: "123456", id_cargo: 4, id_carrera: 9 },
          { cedula: "703218947", nombre: "Luciana", apellidos: "Monge Vargas", fecha_nacimiento: "2001-02-28", correo: "lucianamv@gmail.com", contrasena: "123456", id_cargo: 4, id_carrera: 9 },
          { cedula: "465829103", nombre: "Ricardo", apellidos: "Pérez Álvarez", fecha_nacimiento: "1993-07-07", correo: "ricardopa@gmail.com", contrasena: "123456", id_cargo: 4, id_carrera: 9 },
          { cedula: "982013467", nombre: "Isabela", apellidos: "Hernández Carvajal", fecha_nacimiento: "1994-09-25", correo: "isabelahc@gmail.com", contrasena :"123456", id_cargo: 3, id_carrera: 3 },
          { cedula: "731098254", nombre: "Antonio", apellidos: "Guzmán Rojas", fecha_nacimiento: "1991-05-01", correo: "antoniogr@gmail.com", contrasena: "123456", id_cargo: 4, id_carrera: 9 },
          { cedula: "609823410", nombre: "Paola", apellidos: "Cordero Salas", fecha_nacimiento: "1990-12-20", correo: "paolacs@gmail.com", contrasena: "123456", id_cargo: 4, id_carrera: 9 },
          { cedula: "837410298", nombre: "Emilio", apellidos: "Martínez Vargas", fecha_nacimiento: "1986-11-13", correo: "emiliomv@gmail.com", contrasena: "123456", id_cargo: 2, id_carrera: 9 },
          { cedula: "529087341", nombre: "Gabriela", apellidos: "Soto Ramírez", fecha_nacimiento: "2000-03-15", correo: "gabrielasr@gmail.com", contrasena: "123456", id_cargo: 4, id_carrera: 9 },
          { cedula: "612348970", nombre: "Matías", apellidos: "López Barrantes", fecha_nacimiento: "1998-08-30", correo: "matiaslb@gmail.com", contrasena: "123456", id_cargo: 5, id_carrera: 9 },
        ],
      });
      
  
  await prisma.cuatrimestre.createMany({
    data: [
      { numero_cuatrimestre: 1, anno: 2024 },
      { numero_cuatrimestre: 2, anno: 2024 },
      { numero_cuatrimestre: 3, anno: 2024 },
      { numero_cuatrimestre: 1, anno: 2023 },
      { numero_cuatrimestre: 2, anno: 2023 },
      { numero_cuatrimestre: 3, anno: 2023 },
      { numero_cuatrimestre: 1, anno: 2022 },
      { numero_cuatrimestre: 2, anno: 2022 },
      { numero_cuatrimestre: 3, anno: 2022 },
      { numero_cuatrimestre: 1, anno: 2025 },
      { numero_cuatrimestre: 2, anno: 2025 },
      { numero_cuatrimestre: 3, anno: 2025 },
    ],
  });

  await prisma.planEstudios.createMany({
    data: [
      { nombre: "Plan 2024 - Ingeniería en Sistemas", anno: 2024, id_carrera: 1 },
      { nombre: "Plan 2024 - Administración de Empresas", anno: 2024, id_carrera: 2 },
      { nombre: "Plan 2024 - Medicina", anno: 2024, id_carrera: 3 },
      { nombre: "Plan 2024 - Derecho", anno: 2024, id_carrera: 4 },
      { nombre: "Plan 2024 - Arquitectura", anno: 2024, id_carrera: 5 },
      { nombre: "Plan 2024 - Psicología", anno: 2024, id_carrera: 6 },
      { nombre: "Plan 2024 - Ingeniería Industrial", anno: 2024, id_carrera: 7 },
      { nombre: "Plan 2024 - Diseño Gráfico", anno: 2024, id_carrera: 8 },
    ],
  });
  await prisma.materia.createMany({
    data: [
      // Ingeniería en Sistemas
         // Fundamentos
    { nombre: 'Introducción a la Programación', codigo: 'SIS101', id_plan_estudios: 1 },
    { nombre: 'Matemáticas Discretas', codigo: 'SIS102', id_plan_estudios: 1 },
    { nombre: 'Lógica de Programación', codigo: 'SIS103', id_plan_estudios: 1 },
    { nombre: 'Álgebra Lineal', codigo: 'SIS104', id_plan_estudios: 1 },
    { nombre: 'Cálculo Diferencial e Integral', codigo: 'SIS105', id_plan_estudios: 1 },

    // Programación y Desarrollo
    { nombre: 'Programación Orientada a Objetos', codigo: 'SIS201', id_plan_estudios: 1 },
    { nombre: 'Estructuras de Datos', codigo: 'SIS202', id_plan_estudios: 1 },
    { nombre: 'Diseño y Análisis de Algoritmos', codigo: 'SIS203', id_plan_estudios: 1 },
    { nombre: 'Desarrollo Web', codigo: 'SIS204', id_plan_estudios: 1 },
    { nombre: 'Desarrollo de Aplicaciones Móviles', codigo: 'SIS205', id_plan_estudios: 1 },

    // Bases de Datos
    { nombre: 'Bases de Datos I', codigo: 'SIS301', id_plan_estudios: 1 },
    { nombre: 'Bases de Datos II', codigo: 'SIS302', id_plan_estudios: 1 },
    { nombre: 'Administración de Bases de Datos', codigo: 'SIS303', id_plan_estudios: 1 },
    { nombre: 'Big Data y Analítica', codigo: 'SIS304', id_plan_estudios: 1 },

    // Redes y Seguridad
    { nombre: 'Redes de Computadoras I', codigo: 'SIS401', id_plan_estudios: 1 },
    { nombre: 'Redes de Computadoras II', codigo: 'SIS402', id_plan_estudios: 1 },
    { nombre: 'Seguridad Informática', codigo: 'SIS403', id_plan_estudios: 1 },
    { nombre: 'Criptografía', codigo: 'SIS404', id_plan_estudios: 1 },
    { nombre: 'Hacking Ético', codigo: 'SIS405', id_plan_estudios: 1 },

    // Sistemas Operativos y Computación
    { nombre: 'Sistemas Operativos', codigo: 'SIS501', id_plan_estudios: 1 },
    { nombre: 'Computación en la Nube', codigo: 'SIS502', id_plan_estudios: 1 },
    { nombre: 'Internet de las Cosas (IoT)', codigo: 'SIS503', id_plan_estudios: 1 },
    { nombre: 'Arquitectura de Computadores', codigo: 'SIS504', id_plan_estudios: 1 },

    // Ingeniería de Software y Gestión
    { nombre: 'Ingeniería de Software', codigo: 'SIS601', id_plan_estudios: 1 },
    { nombre: 'Gestión de Proyectos de Software', codigo: 'SIS602', id_plan_estudios: 1 },
    { nombre: 'Metodologías Ágiles', codigo: 'SIS603', id_plan_estudios: 1 },
    { nombre: 'Pruebas y Calidad de Software', codigo: 'SIS604', id_plan_estudios: 1 },

    // Inteligencia Artificial y Ciencia de Datos
    { nombre: 'Inteligencia Artificial', codigo: 'SIS701', id_plan_estudios: 1 },
    { nombre: 'Machine Learning', codigo: 'SIS702', id_plan_estudios: 1 },
    { nombre: 'Deep Learning', codigo: 'SIS703', id_plan_estudios: 1 },
    { nombre: 'Visión por Computadora', codigo: 'SIS704', id_plan_estudios: 1 },
    { nombre: 'Procesamiento de Lenguaje Natural', codigo: 'SIS705', id_plan_estudios: 1 },

    // Desarrollo Avanzado
    { nombre: 'Programación en Python', codigo: 'SIS801', id_plan_estudios: 1 },
    { nombre: 'Desarrollo de Videojuegos', codigo: 'SIS802', id_plan_estudios: 1 },
    { nombre: 'Blockchain y Criptomonedas', codigo: 'SIS803', id_plan_estudios: 1 },
    { nombre: 'Realidad Aumentada y Virtual', codigo: 'SIS804', id_plan_estudios: 1 },
      
      // Administración de Empresas
        // Fundamentos de Administración
    { nombre: 'Introducción a la Administración', codigo: 'ADM101', id_plan_estudios: 2 },
    { nombre: 'Fundamentos de Contabilidad', codigo: 'ADM102', id_plan_estudios: 2 },
    { nombre: 'Matemáticas Financieras', codigo: 'ADM103', id_plan_estudios: 2 },
    { nombre: 'Microeconomía', codigo: 'ADM104', id_plan_estudios: 2 },
    { nombre: 'Macroeconomía', codigo: 'ADM105', id_plan_estudios: 2 },

    // Gestión Empresarial
    { nombre: 'Gestión Empresarial', codigo: 'ADM201', id_plan_estudios: 2 },
    { nombre: 'Administración de Recursos Humanos', codigo: 'ADM202', id_plan_estudios: 2 },
    { nombre: 'Gestión de la Producción', codigo: 'ADM203', id_plan_estudios: 2 },
    { nombre: 'Dirección Estratégica', codigo: 'ADM204', id_plan_estudios: 2 },
    { nombre: 'Ética Empresarial', codigo: 'ADM205', id_plan_estudios: 2 },

    // Finanzas y Economía
    { nombre: 'Contabilidad Financiera', codigo: 'ADM301', id_plan_estudios: 2 },
    { nombre: 'Análisis Financiero', codigo: 'ADM302', id_plan_estudios: 2 },
    { nombre: 'Mercados y Bolsa de Valores', codigo: 'ADM303', id_plan_estudios: 2 },
    { nombre: 'Gestión de Costos', codigo: 'ADM304', id_plan_estudios: 2 },
    { nombre: 'Presupuestos y Planeación Financiera', codigo: 'ADM305', id_plan_estudios: 2 },

    // Marketing y Ventas
    { nombre: 'Fundamentos de Marketing', codigo: 'ADM401', id_plan_estudios: 2 },
    { nombre: 'Comportamiento del Consumidor', codigo: 'ADM402', id_plan_estudios: 2 },
    { nombre: 'Publicidad y Branding', codigo: 'ADM403', id_plan_estudios: 2 },
    { nombre: 'Marketing Digital', codigo: 'ADM404', id_plan_estudios: 2 },
    { nombre: 'Estrategias de Ventas', codigo: 'ADM405', id_plan_estudios: 2 },

    // Operaciones y Logística
    { nombre: 'Logística y Distribución', codigo: 'ADM501', id_plan_estudios: 2 },
    { nombre: 'Administración de la Cadena de Suministro', codigo: 'ADM502', id_plan_estudios: 2 },
    { nombre: 'Investigación de Operaciones', codigo: 'ADM503', id_plan_estudios: 2 },
    { nombre: 'Gestión de la Calidad', codigo: 'ADM504', id_plan_estudios: 2 },
    { nombre: 'Negociación y Toma de Decisiones', codigo: 'ADM505', id_plan_estudios: 2 },

    // Derecho y Legislación Empresarial
    { nombre: 'Derecho Mercantil', codigo: 'ADM601', id_plan_estudios: 2 },
    { nombre: 'Derecho Laboral', codigo: 'ADM602', id_plan_estudios: 2 },
    { nombre: 'Legislación Tributaria', codigo: 'ADM603', id_plan_estudios: 2 },
    { nombre: 'Normas Internacionales de Contabilidad', codigo: 'ADM604', id_plan_estudios: 2 },
    { nombre: 'Protección de Propiedad Intelectual', codigo: 'ADM605', id_plan_estudios: 2 },

    // Innovación y Emprendimiento
    { nombre: 'Creación de Empresas', codigo: 'ADM701', id_plan_estudios: 2 },
    { nombre: 'Innovación y Desarrollo de Negocios', codigo: 'ADM702', id_plan_estudios: 2 },
    { nombre: 'Planes de Negocios', codigo: 'ADM703', id_plan_estudios: 2 },
    { nombre: 'Empresas Familiares', codigo: 'ADM704', id_plan_estudios: 2 },
    { nombre: 'Emprendimiento Digital', codigo: 'ADM705', id_plan_estudios: 2 },

    // Comercio Internacional
    { nombre: 'Negocios Internacionales', codigo: 'ADM801', id_plan_estudios: 2 },
    { nombre: 'Finanzas Internacionales', codigo: 'ADM802', id_plan_estudios: 2 },
    { nombre: 'Comercio Exterior', codigo: 'ADM803', id_plan_estudios: 2 },
    { nombre: 'Tratados y Acuerdos Comerciales', codigo: 'ADM804', id_plan_estudios: 2 },
    { nombre: 'Transporte y Aduanas', codigo: 'ADM805', id_plan_estudios: 2 },
  

      // Medicina
      // Fundamentos de Medicina
    { nombre: 'Introducción a la Medicina', codigo: 'MED101', id_plan_estudios: 3 },
    { nombre: 'Biología Celular y Molecular', codigo: 'MED102', id_plan_estudios: 3 },
    { nombre: 'Química General y Orgánica', codigo: 'MED103', id_plan_estudios: 3 },
    { nombre: 'Bioquímica Médica', codigo: 'MED104', id_plan_estudios: 3 },
    { nombre: 'Genética Humana', codigo: 'MED105', id_plan_estudios: 3 },

    // Anatomía y Fisiología
    { nombre: 'Anatomía Humana I', codigo: 'MED201', id_plan_estudios: 3 },
    { nombre: 'Anatomía Humana II', codigo: 'MED202', id_plan_estudios: 3 },
    { nombre: 'Fisiología I', codigo: 'MED203', id_plan_estudios: 3 },
    { nombre: 'Fisiología II', codigo: 'MED204', id_plan_estudios: 3 },
    { nombre: 'Histología y Embriología', codigo: 'MED205', id_plan_estudios: 3 },

    // Microbiología e Inmunología
    { nombre: 'Microbiología Médica', codigo: 'MED301', id_plan_estudios: 3 },
    { nombre: 'Parasitología', codigo: 'MED302', id_plan_estudios: 3 },
    { nombre: 'Virología Médica', codigo: 'MED303', id_plan_estudios: 3 },
    { nombre: 'Bacteriología y Micología', codigo: 'MED304', id_plan_estudios: 3 },
    { nombre: 'Inmunología Clínica', codigo: 'MED305', id_plan_estudios: 3 },

    // Farmacología y Patología
    { nombre: 'Farmacología I', codigo: 'MED401', id_plan_estudios: 3 },
    { nombre: 'Farmacología II', codigo: 'MED402', id_plan_estudios: 3 },
    { nombre: 'Patología General', codigo: 'MED403', id_plan_estudios: 3 },
    { nombre: 'Patología Sistémica', codigo: 'MED404', id_plan_estudios: 3 },
    { nombre: 'Toxicología Clínica', codigo: 'MED405', id_plan_estudios: 3 },

    // Medicina Clínica
    { nombre: 'Semiología Médica', codigo: 'MED501', id_plan_estudios: 3 },
    { nombre: 'Medicina Interna I', codigo: 'MED502', id_plan_estudios: 3 },
    { nombre: 'Medicina Interna II', codigo: 'MED503', id_plan_estudios: 3 },
    { nombre: 'Cirugía General', codigo: 'MED504', id_plan_estudios: 3 },
    { nombre: 'Urgencias Médicas', codigo: 'MED505', id_plan_estudios: 3 },

    // Especialidades Médicas
    { nombre: 'Pediatría', codigo: 'MED601', id_plan_estudios: 3 },
    { nombre: 'Ginecología y Obstetricia', codigo: 'MED602', id_plan_estudios: 3 },
    { nombre: 'Neurología', codigo: 'MED603', id_plan_estudios: 3 },
    { nombre: 'Cardiología', codigo: 'MED604', id_plan_estudios: 3 },
    { nombre: 'Neumología', codigo: 'MED605', id_plan_estudios: 3 },

    // Medicina Comunitaria y Preventiva
    { nombre: 'Salud Pública', codigo: 'MED701', id_plan_estudios: 3 },
    { nombre: 'Epidemiología', codigo: 'MED702', id_plan_estudios: 3 },
    { nombre: 'Bioética Médica', codigo: 'MED703', id_plan_estudios: 3 },
    { nombre: 'Medicina Familiar', codigo: 'MED704', id_plan_estudios: 3 },
    { nombre: 'Nutrición y Metabolismo', codigo: 'MED705', id_plan_estudios: 3 },

    // Rotaciones Clínicas y Prácticas
    { nombre: 'Rotación en Medicina Interna', codigo: 'MED801', id_plan_estudios: 3 },
    { nombre: 'Rotación en Cirugía', codigo: 'MED802', id_plan_estudios: 3 },
    { nombre: 'Rotación en Pediatría', codigo: 'MED803', id_plan_estudios: 3 },
    { nombre: 'Rotación en Ginecología y Obstetricia', codigo: 'MED804', id_plan_estudios: 3 },
    { nombre: 'Internado Médico', codigo: 'MED805', id_plan_estudios: 3 },
 
      // Derecho
         // Fundamentos del Derecho
    { nombre: 'Introducción al Derecho', codigo: 'DER101', id_plan_estudios: 4 },
    { nombre: 'Teoría General del Derecho', codigo: 'DER102', id_plan_estudios: 4 },
    { nombre: 'Historia del Derecho', codigo: 'DER103', id_plan_estudios: 4 },
    { nombre: 'Derecho Romano', codigo: 'DER104', id_plan_estudios: 4 },
    { nombre: 'Filosofía del Derecho', codigo: 'DER105', id_plan_estudios: 4 },

    // Derecho Constitucional
    { nombre: 'Derecho Constitucional I', codigo: 'DER201', id_plan_estudios: 4 },
    { nombre: 'Derecho Constitucional II', codigo: 'DER202', id_plan_estudios: 4 },
    { nombre: 'Derechos Humanos', codigo: 'DER203', id_plan_estudios: 4 },
    { nombre: 'Control de Constitucionalidad', codigo: 'DER204', id_plan_estudios: 4 },

    // Derecho Civil
    { nombre: 'Derecho Civil I: Parte General', codigo: 'DER301', id_plan_estudios: 4 },
    { nombre: 'Derecho Civil II: Bienes', codigo: 'DER302', id_plan_estudios: 4 },
    { nombre: 'Derecho Civil III: Contratos', codigo: 'DER303', id_plan_estudios: 4 },
    { nombre: 'Derecho Civil IV: Responsabilidad Extracontractual', codigo: 'DER304', id_plan_estudios: 4 },
    { nombre: 'Derecho Civil V: Sucesiones', codigo: 'DER305', id_plan_estudios: 4 },

    // Derecho Penal
    { nombre: 'Derecho Penal I: Parte General', codigo: 'DER401', id_plan_estudios: 4 },
    { nombre: 'Derecho Penal II: Delitos en Particular', codigo: 'DER402', id_plan_estudios: 4 },
    { nombre: 'Derecho Penal III: Procedimiento Penal', codigo: 'DER403', id_plan_estudios: 4 },
    { nombre: 'Criminología', codigo: 'DER404', id_plan_estudios: 4 },

    // Derecho Mercantil
    { nombre: 'Derecho Mercantil I: Teoría General', codigo: 'DER501', id_plan_estudios: 4 },
    { nombre: 'Derecho Mercantil II: Sociedades', codigo: 'DER502', id_plan_estudios: 4 },
    { nombre: 'Contratos Mercantiles', codigo: 'DER503', id_plan_estudios: 4 },
    { nombre: 'Títulos de Crédito', codigo: 'DER504', id_plan_estudios: 4 },

    // Derecho Administrativo
    { nombre: 'Derecho Administrativo I', codigo: 'DER601', id_plan_estudios: 4 },
    { nombre: 'Derecho Administrativo II: Procedimiento Administrativo', codigo: 'DER602', id_plan_estudios: 4 },
    { nombre: 'Derecho Administrativo III: Control de la Administración Pública', codigo: 'DER603', id_plan_estudios: 4 },

    // Derecho Laboral
    { nombre: 'Derecho Laboral I', codigo: 'DER701', id_plan_estudios: 4 },
    { nombre: 'Derecho Laboral II: Contratos de Trabajo', codigo: 'DER702', id_plan_estudios: 4 },
    { nombre: 'Derecho Laboral III: Seguridad Social', codigo: 'DER703', id_plan_estudios: 4 },
    { nombre: 'Derecho Colectivo del Trabajo', codigo: 'DER704', id_plan_estudios: 4 },

    // Derecho Internacional
    { nombre: 'Derecho Internacional Público', codigo: 'DER801', id_plan_estudios: 4 },
    { nombre: 'Derecho Internacional Privado', codigo: 'DER802', id_plan_estudios: 4 },
    { nombre: 'Derecho Internacional de los Derechos Humanos', codigo: 'DER803', id_plan_estudios: 4 },
    { nombre: 'Derecho Internacional Económico', codigo: 'DER804', id_plan_estudios: 4 },

    // Derecho Ambiental
    { nombre: 'Derecho Ambiental I', codigo: 'DER901', id_plan_estudios: 4 },
    { nombre: 'Derecho Ambiental II: Regulación y Gestión', codigo: 'DER902', id_plan_estudios: 4 },
    { nombre: 'Protección de la Biodiversidad', codigo: 'DER903', id_plan_estudios: 4 },

    // Derecho Tributario
    { nombre: 'Derecho Tributario I', codigo: 'DER1001', id_plan_estudios: 4 },
    { nombre: 'Derecho Tributario II: Impuestos Directos', codigo: 'DER1002', id_plan_estudios: 4 },
    { nombre: 'Derecho Tributario III: Impuestos Indirectos', codigo: 'DER1003', id_plan_estudios: 4 },

    // Derecho de la Familia y Menores
    { nombre: 'Derecho de la Familia', codigo: 'DER1101', id_plan_estudios: 4 },
    { nombre: 'Derecho de los Menores', codigo: 'DER1102', id_plan_estudios: 4 },
    { nombre: 'Adopciones y Tutelas', codigo: 'DER1103', id_plan_estudios: 4 },

    // Derecho Procesal
    { nombre: 'Derecho Procesal Civil I', codigo: 'DER1201', id_plan_estudios: 4 },
    { nombre: 'Derecho Procesal Civil II: Ejecución de Sentencias', codigo: 'DER1202', id_plan_estudios: 4 },
    { nombre: 'Derecho Procesal Penal', codigo: 'DER1203', id_plan_estudios: 4 },
    { nombre: 'Derecho Procesal Laboral', codigo: 'DER1204', id_plan_estudios: 4 },

    // Derecho Notarial y Registral
    { nombre: 'Derecho Notarial', codigo: 'DER1301', id_plan_estudios: 4 },
    { nombre: 'Derecho Registral', codigo: 'DER1302', id_plan_estudios: 4 },
  
      // Arquitectura
      // Fundamentos de la Arquitectura
    { nombre: 'Introducción a la Arquitectura', codigo: 'ARC101', id_plan_estudios: 5 },
    { nombre: 'Historia de la Arquitectura', codigo: 'ARC102', id_plan_estudios: 5 },
    { nombre: 'Teoría de la Arquitectura', codigo: 'ARC103', id_plan_estudios: 5 },
    { nombre: 'Materiales y Técnicas de Construcción I', codigo: 'ARC104', id_plan_estudios: 5 },
    { nombre: 'Representación Gráfica I', codigo: 'ARC105', id_plan_estudios: 5 },

    // Diseño Arquitectónico
    { nombre: 'Diseño Arquitectónico I', codigo: 'ARC201', id_plan_estudios: 5 },
    { nombre: 'Diseño Arquitectónico II', codigo: 'ARC202', id_plan_estudios: 5 },
    { nombre: 'Diseño Arquitectónico III', codigo: 'ARC203', id_plan_estudios: 5 },
    { nombre: 'Diseño Urbano', codigo: 'ARC204', id_plan_estudios: 5 },
    { nombre: 'Tecnología en Arquitectura', codigo: 'ARC205', id_plan_estudios: 5 },

    // Estructuras y Construcción
    { nombre: 'Estructuras I', codigo: 'ARC301', id_plan_estudios: 5 },
    { nombre: 'Estructuras II', codigo: 'ARC302', id_plan_estudios: 5 },
    { nombre: 'Construcción de Edificaciones I', codigo: 'ARC303', id_plan_estudios: 5 },
    { nombre: 'Construcción de Edificaciones II', codigo: 'ARC304', id_plan_estudios: 5 },
    { nombre: 'Instalaciones y Equipos en Edificaciones', codigo: 'ARC305', id_plan_estudios: 5 },

    // Urbanismo
    { nombre: 'Urbanismo I', codigo: 'ARC401', id_plan_estudios: 5 },
    { nombre: 'Urbanismo II', codigo: 'ARC402', id_plan_estudios: 5 },
    { nombre: 'Planificación Urbana', codigo: 'ARC403', id_plan_estudios: 5 },
    { nombre: 'Infraestructura Urbana', codigo: 'ARC404', id_plan_estudios: 5 },
    { nombre: 'Política y Gestión Urbana', codigo: 'ARC405', id_plan_estudios: 5 },

    // Sostenibilidad y Medio Ambiente
    { nombre: 'Arquitectura Sostenible', codigo: 'ARC501', id_plan_estudios: 5 },
    { nombre: 'Energía y Arquitectura', codigo: 'ARC502', id_plan_estudios: 5 },
    { nombre: 'Diseño Ambiental y Eficiencia Energética', codigo: 'ARC503', id_plan_estudios: 5 },
    { nombre: 'Construcción Sustentable', codigo: 'ARC504', id_plan_estudios: 5 },
    { nombre: 'Tecnología en Energía Renovable', codigo: 'ARC505', id_plan_estudios: 5 },

    // Historia y Cultura
    { nombre: 'Historia de la Arquitectura Moderna', codigo: 'ARC601', id_plan_estudios: 5 },
    { nombre: 'Historia de la Arquitectura Contemporánea', codigo: 'ARC602', id_plan_estudios: 5 },
    { nombre: 'Arquitectura y Cultura', codigo: 'ARC603', id_plan_estudios: 5 },
    { nombre: 'Patrimonio Arquitectónico', codigo: 'ARC604', id_plan_estudios: 5 },

    // Representación y Diseño Digital
    { nombre: 'Dibujo Técnico I', codigo: 'ARC701', id_plan_estudios: 5 },
    { nombre: 'Dibujo Técnico II', codigo: 'ARC702', id_plan_estudios: 5 },
    { nombre: 'Modelado 3D en Arquitectura', codigo: 'ARC703', id_plan_estudios: 5 },
    { nombre: 'Representación Digital Arquitectónica', codigo: 'ARC704', id_plan_estudios: 5 },
    { nombre: 'Simulación y Visualización en Arquitectura', codigo: 'ARC705', id_plan_estudios: 5 },

    // Proyectos y Talleres
    { nombre: 'Taller de Diseño Arquitectónico I', codigo: 'ARC801', id_plan_estudios: 5 },
    { nombre: 'Taller de Diseño Arquitectónico II', codigo: 'ARC802', id_plan_estudios: 5 },
    { nombre: 'Taller de Urbanismo', codigo: 'ARC803', id_plan_estudios: 5 },
    { nombre: 'Taller de Estructuras y Construcción', codigo: 'ARC804', id_plan_estudios: 5 },
    { nombre: 'Taller de Proyecto Final', codigo: 'ARC805', id_plan_estudios: 5 },

    // Prácticas Profesionales
    { nombre: 'Prácticas en Obra I', codigo: 'ARC901', id_plan_estudios: 5 },
    { nombre: 'Prácticas en Obra II', codigo: 'ARC902', id_plan_estudios: 5 },
    { nombre: 'Prácticas Profesionales', codigo: 'ARC903', id_plan_estudios: 5 },
    { nombre: 'Estudio de Caso en Arquitectura', codigo: 'ARC904', id_plan_estudios: 5 },
 
      // Psicología
       // Fundamentos de la Psicología
    { nombre: 'Introducción a la Psicología', codigo: 'PSI101', id_plan_estudios: 6 },
    { nombre: 'Historia de la Psicología', codigo: 'PSI102', id_plan_estudios: 6 },
    { nombre: 'Bases Biológicas de la Conducta', codigo: 'PSI103', id_plan_estudios: 6 },
    { nombre: 'Psicología General', codigo: 'PSI104', id_plan_estudios: 6 },
    { nombre: 'Teoría Psicológica', codigo: 'PSI105', id_plan_estudios: 6 },

    // Psicología del Desarrollo
    { nombre: 'Psicología del Desarrollo I: Infancia', codigo: 'PSI201', id_plan_estudios: 6 },
    { nombre: 'Psicología del Desarrollo II: Adolescencia', codigo: 'PSI202', id_plan_estudios: 6 },
    { nombre: 'Psicología del Desarrollo III: Adulto y Vejez', codigo: 'PSI203', id_plan_estudios: 6 },

    // Psicología Social
    { nombre: 'Psicología Social I', codigo: 'PSI301', id_plan_estudios: 6 },
    { nombre: 'Psicología Social II: Grupos y Actitudes', codigo: 'PSI302', id_plan_estudios: 6 },
    { nombre: 'Psicología de la Comunicación', codigo: 'PSI303', id_plan_estudios: 6 },

    // Psicología Cognitiva
    { nombre: 'Psicología Cognitiva I: Procesos Perceptivos', codigo: 'PSI401', id_plan_estudios: 6 },
    { nombre: 'Psicología Cognitiva II: Memoria y Aprendizaje', codigo: 'PSI402', id_plan_estudios: 6 },
    { nombre: 'Psicología Cognitiva III: Pensamiento y Resolución de Problemas', codigo: 'PSI403', id_plan_estudios: 6 },

    // Psicología Clínica
    { nombre: 'Psicología Clínica I: Fundamentos', codigo: 'PSI501', id_plan_estudios: 6 },
    { nombre: 'Psicología Clínica II: Evaluación Psicológica', codigo: 'PSI502', id_plan_estudios: 6 },
    { nombre: 'Psicopatología I: Trastornos del Estado de Ánimo', codigo: 'PSI503', id_plan_estudios: 6 },
    { nombre: 'Psicopatología II: Trastornos de Ansiedad', codigo: 'PSI504', id_plan_estudios: 6 },
    { nombre: 'Psicoterapia I: Teorías y Técnicas', codigo: 'PSI505', id_plan_estudios: 6 },

    // Psicología Educativa
    { nombre: 'Psicología Educativa I: Desarrollo Cognitivo', codigo: 'PSI601', id_plan_estudios: 6 },
    { nombre: 'Psicología Educativa II: Estrategias de Enseñanza', codigo: 'PSI602', id_plan_estudios: 6 },
    { nombre: 'Psicología del Aprendizaje', codigo: 'PSI603', id_plan_estudios: 6 },
    { nombre: 'Psicología Escolar', codigo: 'PSI604', id_plan_estudios: 6 },

    // Psicología Organizacional
    { nombre: 'Psicología Organizacional I', codigo: 'PSI701', id_plan_estudios: 6 },
    { nombre: 'Psicología Organizacional II: Motivación y Liderazgo', codigo: 'PSI702', id_plan_estudios: 6 },
    { nombre: 'Evaluación Psicológica en el Trabajo', codigo: 'PSI703', id_plan_estudios: 6 },

    // Métodos y Técnicas de Investigación
    { nombre: 'Métodos de Investigación en Psicología', codigo: 'PSI801', id_plan_estudios: 6 },
    { nombre: 'Técnicas de Evaluación Psicológica', codigo: 'PSI802', id_plan_estudios: 6 },
    { nombre: 'Estadística para Psicología', codigo: 'PSI803', id_plan_estudios: 6 },

    // Ética Profesional y Legislación
    { nombre: 'Ética Profesional en Psicología', codigo: 'PSI901', id_plan_estudios: 6 },
    { nombre: 'Legislación en Psicología', codigo: 'PSI902', id_plan_estudios: 6 },

    // Psicología Forense
    { nombre: 'Psicología Forense I: Introducción', codigo: 'PSI1001', id_plan_estudios: 6 },
    { nombre: 'Psicología Forense II: Evaluación de Testigos y Victimas', codigo: 'PSI1002', id_plan_estudios: 6 },
    { nombre: 'Psicología Forense III: Criminología', codigo: 'PSI1003', id_plan_estudios: 6 },

    // Psicología de la Salud
    { nombre: 'Psicología de la Salud I', codigo: 'PSI1101', id_plan_estudios: 6 },
    { nombre: 'Psicología de la Salud II: Estrés y Bienestar', codigo: 'PSI1102', id_plan_estudios: 6 },
    { nombre: 'Intervención Psicológica en Enfermedades Crónicas', codigo: 'PSI1103', id_plan_estudios: 6 },

    // Prácticas Profesionales
    { nombre: 'Prácticas Profesionales en Psicología', codigo: 'PSI1201', id_plan_estudios: 6 },
    { nombre: 'Internado Clínico en Psicología', codigo: 'PSI1202', id_plan_estudios: 6 },
    { nombre: 'Talleres Psicológicos Aplicados', codigo: 'PSI1203', id_plan_estudios: 6 },
    
   // Ingeniería Industrial
    // Fundamentos de la Ingeniería Industrial
    { nombre: 'Introducción a la Ingeniería Industrial', codigo: 'II101', id_plan_estudios: 7 },
    { nombre: 'Matemáticas I: Cálculo Diferencial', codigo: 'II102', id_plan_estudios: 7 },
    { nombre: 'Matemáticas II: Cálculo Integral', codigo: 'II103', id_plan_estudios: 7 },
    { nombre: 'Física I: Mecánica', codigo: 'II104', id_plan_estudios: 7 },
    { nombre: 'Estadística para Ingenieros', codigo: 'II105', id_plan_estudios: 7 },

    // Diseño y Optimización
    { nombre: 'Métodos de Optimización', codigo: 'II201', id_plan_estudios: 7 },
    { nombre: 'Investigación Operativa I', codigo: 'II202', id_plan_estudios: 7},
    { nombre: 'Investigación Operativa II', codigo: 'II203', id_plan_estudios: 7 },
    { nombre: 'Simulación de Procesos', codigo: 'II204', id_plan_estudios: 7 },
    { nombre: 'Teoría de Sistemas', codigo: 'II205', id_plan_estudios: 7 },

    // Gestión y Producción
    { nombre: 'Gestión de la Producción I', codigo: 'II301', id_plan_estudios: 7 },
    { nombre: 'Gestión de la Producción II', codigo: 'II302', id_plan_estudios: 7 },
    { nombre: 'Control de Inventarios', codigo: 'II303', id_plan_estudios: 7 },
    { nombre: 'Gestión de la Calidad', codigo: 'II304', id_plan_estudios: 7 },
    { nombre: 'Lean Manufacturing', codigo: 'II305', id_plan_estudios: 7},

    // Logística y Distribución
    { nombre: 'Logística I', codigo: 'II401', id_plan_estudios: 7 },
    { nombre: 'Logística II: Gestión de la Cadena de Suministro', codigo: 'II402', id_plan_estudios: 7 },
    { nombre: 'Transporte y Distribución', codigo: 'II403', id_plan_estudios: 7 },
    { nombre: 'Planificación y Control de la Producción', codigo: 'II404', id_plan_estudios: 7 },

    // Finanzas y Economía
    { nombre: 'Economía para Ingenieros', codigo: 'II501', id_plan_estudios: 7},
    { nombre: 'Costos Industriales', codigo: 'II502', id_plan_estudios: 7 },
    { nombre: 'Análisis Financiero', codigo: 'II503', id_plan_estudios: 7 },
    { nombre: 'Evaluación de Proyectos', codigo: 'II504', id_plan_estudios: 7 },
    { nombre: 'Toma de Decisiones Financieras', codigo: 'II505', id_plan_estudios: 7 },

    // Ergonomía y Seguridad Industrial
    { nombre: 'Ergonomía I', codigo: 'II601', id_plan_estudios: 7 },
    { nombre: 'Ergonomía II: Diseño de Estaciones de Trabajo', codigo: 'II602', id_plan_estudios: 7},
    { nombre: 'Seguridad Industrial', codigo: 'II603', id_plan_estudios: 7 },
    { nombre: 'Higiene y Salud Ocupacional', codigo: 'II604', id_plan_estudios: 7},

    // Tecnologías de la Información
    { nombre: 'Sistemas de Información para la Gestión', codigo: 'II701', id_plan_estudios: 7 },
    { nombre: 'Tecnologías de la Información en la Industria', codigo: 'II702', id_plan_estudios: 7 },
    { nombre: 'Automatización Industrial', codigo: 'II703', id_plan_estudios: 7 },
    { nombre: 'Control de Procesos Industriales', codigo: 'II704', id_plan_estudios: 7},

    // Prácticas Profesionales y Proyectos
    { nombre: 'Prácticas en Empresas', codigo: 'II801', id_plan_estudios: 7},
    { nombre: 'Proyecto Final de Ingeniería Industrial', codigo: 'II802', id_plan_estudios: 7 },

    // Responsabilidad Social y Ética Profesional
    { nombre: 'Ética Profesional', codigo: 'II901', id_plan_estudios: 7 },
    { nombre: 'Responsabilidad Social Empresarial', codigo: 'II902', id_plan_estudios: 7 },
    { nombre: 'Gestión Ambiental en la Industria', codigo: 'II903', id_plan_estudios: 7 },

    // Investigación y Desarrollo
    { nombre: 'Innovación y Desarrollo Tecnológico', codigo: 'II1001', id_plan_estudios: 7 },
    { nombre: 'Gestión de la Innovación', codigo: 'II1002', id_plan_estudios: 7 },
    { nombre: 'Investigación y Desarrollo en Ingeniería Industrial', codigo: 'II1003', id_plan_estudios: 7 },

    // Proyectos de Ingeniería
    { nombre: 'Gestión de Proyectos de Ingeniería', codigo: 'II1101', id_plan_estudios: 7 },
    { nombre: 'Evaluación y Control de Proyectos', codigo: 'II1102', id_plan_estudios: 7 },
 
    // Diseño Gráfico
    // Fundamentos del Diseño Gráfico
    { nombre: 'Introducción al Diseño Gráfico', codigo: 'DG101', id_plan_estudios: 8 },
    { nombre: 'Historia del Diseño Gráfico', codigo: 'DG102', id_plan_estudios: 8 },
    { nombre: 'Teoría del Color', codigo: 'DG103', id_plan_estudios: 8 },
    { nombre: 'Tipografía I', codigo: 'DG104', id_plan_estudios: 8 },
    { nombre: 'Dibujo y Bocetaje', codigo: 'DG105', id_plan_estudios: 8 },

    // Herramientas y Técnicas de Diseño
    { nombre: 'Software de Diseño Gráfico I', codigo: 'DG201', id_plan_estudios: 8 },
    { nombre: 'Software de Diseño Gráfico II', codigo: 'DG202', id_plan_estudios: 8 },
    { nombre: 'Fotografía Digital', codigo: 'DG203', id_plan_estudios: 8  },
    { nombre: 'Ilustración Digital', codigo: 'DG204', id_plan_estudios: 8  },
    { nombre: 'Edición de Imágenes', codigo: 'DG205', id_plan_estudios: 8  },

    // Diseño Web y Multimedia
    { nombre: 'Diseño Web I: Fundamentos', codigo: 'DG301', id_plan_estudios: 8  },
    { nombre: 'Diseño Web II: Interactividad y Usabilidad', codigo: 'DG302', id_plan_estudios: 8  },
    { nombre: 'Diseño de Interfaces de Usuario', codigo: 'DG303', id_plan_estudios: 8  },
    { nombre: 'Animación Digital', codigo: 'DG304', id_plan_estudios:8 },
    { nombre: 'Producción Multimedia', codigo: 'DG305', id_plan_estudios: 8  },

    // Diseño Editorial y Publicidad
    { nombre: 'Diseño Editorial I', codigo: 'DG401', id_plan_estudios: 8  },
    { nombre: 'Diseño Editorial II: Maquetación y Tipografía', codigo: 'DG402', id_plan_estudios: 8  },
    { nombre: 'Publicidad y Diseño Gráfico', codigo: 'DG403', id_plan_estudios: 8  },
    { nombre: 'Packaging y Diseño de Envases', codigo: 'DG404', id_plan_estudios: 8 },

    // Diseño de Marca y Comunicación Visual
    { nombre: 'Branding y Diseño de Marca', codigo: 'DG501', id_plan_estudios: 8  },
    { nombre: 'Comunicación Visual I: Principios y Métodos', codigo: 'DG502', id_plan_estudios: 8 },
    { nombre: 'Comunicación Visual II: Estrategias y Medios', codigo: 'DG503', id_plan_estudios: 8  },

    // Diseño de Experiencia de Usuario (UX) y Experiencia de Interacción (UI)
    { nombre: 'Introducción a UX y UI', codigo: 'DG601', id_plan_estudios: 8  },
    { nombre: 'Investigación de Usuario', codigo: 'DG602', id_plan_estudios: 8  },
    { nombre: 'Prototipado y Wireframing', codigo: 'DG603', id_plan_estudios: 8  },
    { nombre: 'Usabilidad en Diseño de Interacciones', codigo: 'DG604', id_plan_estudios:8  },

    // Técnicas Avanzadas de Diseño
    { nombre: 'Diseño 3D y Modelado', codigo: 'DG701', id_plan_estudios: 8  },
    { nombre: 'Animación en 3D', codigo: 'DG702', id_plan_estudios: 8  },
    { nombre: 'Diseño de Realidad Aumentada', codigo: 'DG703', id_plan_estudios: 8  },

    // Ética y Responsabilidad Social en Diseño
    { nombre: 'Ética Profesional en Diseño Gráfico', codigo: 'DG801', id_plan_estudios: 8  },
    { nombre: 'Diseño Responsable y Sostenibilidad', codigo: 'DG802', id_plan_estudios:8  },

    // Prácticas Profesionales y Proyectos
    { nombre: 'Prácticas Profesionales en Diseño Gráfico', codigo: 'DG901', id_plan_estudios:8  },
    { nombre: 'Proyecto Final de Diseño Gráfico', codigo: 'DG902', id_plan_estudios: 8 },

    // Diseño en el Entorno Digital y Actual
    { nombre: 'Diseño para Dispositivos Móviles', codigo: 'DG1001', id_plan_estudios: 8  },
    { nombre: 'Diseño en Redes Sociales y Marketing Digital', codigo: 'DG1002', id_plan_estudios: 8  },
    { nombre: 'Estrategias de Comunicación Digital', codigo: 'DG1003', id_plan_estudios: 8  },
  ],
  });
  await prisma.curso.createMany({
    data: [
      { id_materia: 1, id_docente: 4, horario: 'Lunes 8:00-10:00', aula: 'A101', id_cuatrimestre: 1 },
      { id_materia: 2, id_docente: 4, horario: 'Martes 10:00-12:00', aula: 'B202', id_cuatrimestre: 2 },
      { id_materia: 3, id_docente: 9, horario: 'Miércoles 14:00-16:00', aula: 'C303', id_cuatrimestre: 3 },
      { id_materia: 4, id_docente: 10, horario: 'Jueves 16:00-18:00', aula: 'D404', id_cuatrimestre: 4 },
      { id_materia: 5, id_docente: 17, horario: 'Viernes 18:00-20:00', aula: 'E505', id_cuatrimestre: 5 },
      { id_materia: 6, id_docente: 19, horario: 'Sábado 8:00-10:00', aula: 'F606', id_cuatrimestre: 6 },
      { id_materia: 7, id_docente: 10, horario: 'Lunes 10:00-12:00', aula: 'G707', id_cuatrimestre: 7 },
      { id_materia: 8, id_docente: 9, horario: 'Martes 12:00-14:00', aula: 'H808', id_cuatrimestre: 8 },
      { id_materia: 9, id_docente: 17, horario: 'Miércoles 16:00-18:00', aula: 'I909', id_cuatrimestre: 9 },
      { id_materia: 10, id_docente: 4, horario: 'Jueves 18:00-20:00', aula: 'J1010', id_cuatrimestre: 10 },
      { id_materia: 11, id_docente: 5, horario: 'Viernes 8:00-10:00', aula: 'K1111', id_cuatrimestre: 11 },
      { id_materia: 12, id_docente: 6, horario: 'Sábado 10:00-12:00', aula: 'L1212', id_cuatrimestre: 12 },
      { id_materia: 13, id_docente: 7, horario: 'Lunes 12:00-14:00', aula: 'M1313', id_cuatrimestre: 1 },
      { id_materia: 14, id_docente: 8, horario: 'Martes 14:00-16:00', aula: 'N1414', id_cuatrimestre: 2 },
      { id_materia: 15, id_docente: 9, horario: 'Miércoles 16:00-18:00', aula: 'O1515', id_cuatrimestre: 3 },
      { id_materia: 16, id_docente: 10, horario: 'Jueves 18:00-20:00', aula: 'P1616', id_cuatrimestre: 4 },
      { id_materia: 17, id_docente: 11, horario: 'Viernes 8:00-10:00', aula: 'Q1717', id_cuatrimestre: 5 },
      { id_materia: 18, id_docente: 12, horario: 'Sábado 10:00-12:00', aula: 'R1818', id_cuatrimestre: 6 },
      { id_materia: 19, id_docente: 13, horario: 'Lunes 12:00-14:00', aula: 'S1919', id_cuatrimestre: 7 },
      { id_materia: 20, id_docente: 14, horario: 'Martes 14:00-16:00', aula: 'T2020', id_cuatrimestre: 8 },
      { id_materia: 21, id_docente: 15, horario: 'Miércoles 16:00-18:00', aula: 'U2121', id_cuatrimestre: 9 },
      { id_materia: 22, id_docente: 16, horario: 'Jueves 18:00-20:00', aula: 'V2222', id_cuatrimestre: 10 },
      { id_materia: 23, id_docente: 17, horario: 'Viernes 8:00-10:00', aula: 'W2323', id_cuatrimestre: 11 },
      { id_materia: 24, id_docente: 18, horario: 'Sábado 10:00-12:00', aula: 'X2424', id_cuatrimestre: 12 },
      { id_materia: 25, id_docente: 19, horario: 'Lunes 12:00-14:00', aula: 'Y2525', id_cuatrimestre: 1 },
      { id_materia: 26, id_docente: 20, horario: 'Martes 14:00-16:00', aula: 'Z2626', id_cuatrimestre: 2 },
      { id_materia: 1, id_docente: 1, horario: 'Lunes 08:00-10:00', aula: 'A101', id_cuatrimestre: 1 },
      { id_materia: 2, id_docente: 2, horario: 'Lunes 10:00-12:00', aula: 'A102', id_cuatrimestre: 1 },
      { id_materia: 3, id_docente: 3, horario: 'Martes 08:00-10:00', aula: 'B201', id_cuatrimestre: 1 },
      { id_materia: 4, id_docente: 4, horario: 'Martes 10:00-12:00', aula: 'B202', id_cuatrimestre: 1 },
      { id_materia: 5, id_docente: 5, horario: 'Miércoles 08:00-10:00', aula: 'C301', id_cuatrimestre: 1 },
      { id_materia: 6, id_docente: 6, horario: 'Miércoles 10:00-12:00', aula: 'C302', id_cuatrimestre: 1 },
      { id_materia: 7, id_docente: 7, horario: 'Jueves 08:00-10:00', aula: 'D401', id_cuatrimestre: 1 },
      { id_materia: 8, id_docente: 8, horario: 'Jueves 10:00-12:00', aula: 'D402', id_cuatrimestre: 1 },
      { id_materia: 9, id_docente: 9, horario: 'Viernes 08:00-10:00', aula: 'E501', id_cuatrimestre: 1 },
      { id_materia: 10, id_docente: 10, horario: 'Viernes 10:00-12:00', aula: 'E502', id_cuatrimestre: 1 },
      { id_materia: 11, id_docente: 11, horario: 'Lunes 14:00-16:00', aula: 'F601', id_cuatrimestre: 2 },
      { id_materia: 12, id_docente: 12, horario: 'Lunes 16:00-18:00', aula: 'F602', id_cuatrimestre: 2 },
      { id_materia: 13, id_docente: 13, horario: 'Martes 14:00-16:00', aula: 'G701', id_cuatrimestre: 2 },
      { id_materia: 14, id_docente: 14, horario: 'Martes 16:00-18:00', aula: 'G702', id_cuatrimestre: 2 },
      { id_materia: 15, id_docente: 15, horario: 'Miércoles 14:00-16:00', aula: 'H801', id_cuatrimestre: 2 },
      { id_materia: 16, id_docente: 16, horario: 'Miércoles 16:00-18:00', aula: 'H802', id_cuatrimestre: 2 },
      { id_materia: 17, id_docente: 17, horario: 'Jueves 14:00-16:00', aula: 'I901', id_cuatrimestre: 2 },
      { id_materia: 18, id_docente: 18, horario: 'Jueves 16:00-18:00', aula: 'I902', id_cuatrimestre: 2 },
      { id_materia: 19, id_docente: 19, horario: 'Viernes 14:00-16:00', aula: 'J1001', id_cuatrimestre: 2 },
      { id_materia: 20, id_docente: 20, horario: 'Viernes 16:00-18:00', aula: 'J1002', id_cuatrimestre: 2 },
      { id_materia: 21, id_docente: 1, horario: 'Lunes 18:00-20:00', aula: 'A103', id_cuatrimestre: 3 },
      { id_materia: 22, id_docente: 2, horario: 'Lunes 20:00-22:00', aula: 'A104', id_cuatrimestre: 3 },
      { id_materia: 23, id_docente: 3, horario: 'Martes 18:00-20:00', aula: 'B203', id_cuatrimestre: 3 },
      { id_materia: 24, id_docente: 4, horario: 'Martes 20:00-22:00', aula: 'B204', id_cuatrimestre: 3 },
      { id_materia: 25, id_docente: 5, horario: 'Miércoles 18:00-20:00', aula: 'C303', id_cuatrimestre: 3 },
      { id_materia: 26, id_docente: 6, horario: 'Miércoles 20:00-22:00', aula: 'C304', id_cuatrimestre: 3 },
      { id_materia: 27, id_docente: 7, horario: 'Jueves 18:00-20:00', aula: 'D403', id_cuatrimestre: 3 },
      { id_materia: 28, id_docente: 8, horario: 'Jueves 20:00-22:00', aula: 'D404', id_cuatrimestre: 3 },
      { id_materia: 29, id_docente: 9, horario: 'Viernes 18:00-20:00', aula: 'E503', id_cuatrimestre: 3 },
      { id_materia: 30, id_docente: 10, horario: 'Viernes 20:00-22:00', aula: 'E504', id_cuatrimestre: 3 },
      { id_materia: 31, id_docente: 11, horario: 'Lunes 08:00-10:00', aula: 'F603', id_cuatrimestre: 1 },
      { id_materia: 32, id_docente: 12, horario: 'Lunes 10:00-12:00', aula: 'F604', id_cuatrimestre: 1 },
      { id_materia: 33, id_docente: 13, horario: 'Martes 08:00-10:00', aula: 'G703', id_cuatrimestre: 1 },
      { id_materia: 34, id_docente: 14, horario: 'Martes 10:00-12:00', aula: 'G704', id_cuatrimestre: 1 },
      { id_materia: 35, id_docente: 15, horario: 'Miércoles 08:00-10:00', aula: 'H803', id_cuatrimestre: 1 },
      { id_materia: 36, id_docente: 16, horario: 'Miércoles 10:00-12:00', aula: 'H804', id_cuatrimestre: 1 },
      { id_materia: 37, id_docente: 17, horario: 'Jueves 08:00-10:00', aula: 'I903', id_cuatrimestre: 1 },
      { id_materia: 38, id_docente: 18, horario: 'Jueves 10:00-12:00', aula: 'I904', id_cuatrimestre: 1 },
      { id_materia: 39, id_docente: 19, horario: 'Viernes 08:00-10:00', aula: 'J1003', id_cuatrimestre: 1 },
      { id_materia: 40, id_docente: 20, horario: 'Viernes 10:00-12:00', aula: 'J1004', id_cuatrimestre: 1 },
      { id_materia: 41, id_docente: 1, horario: 'Lunes 09:00-11:00', aula: 'K1101', id_cuatrimestre: 2 },
  { id_materia: 42, id_docente: 2, horario: 'Lunes 11:00-13:00', aula: 'K1102', id_cuatrimestre: 2 },
  { id_materia: 43, id_docente: 3, horario: 'Martes 09:00-11:00', aula: 'L1201', id_cuatrimestre: 2 },
  { id_materia: 44, id_docente: 4, horario: 'Martes 11:00-13:00', aula: 'L1202', id_cuatrimestre: 2 },
  { id_materia: 45, id_docente: 5, horario: 'Miércoles 09:00-11:00', aula: 'M1301', id_cuatrimestre: 2 },
  { id_materia: 46, id_docente: 6, horario: 'Miércoles 11:00-13:00', aula: 'M1302', id_cuatrimestre: 2 },
  { id_materia: 47, id_docente: 7, horario: 'Jueves 09:00-11:00', aula: 'N1401', id_cuatrimestre: 2 },
  { id_materia: 48, id_docente: 8, horario: 'Jueves 11:00-13:00', aula: 'N1402', id_cuatrimestre: 2 },
  { id_materia: 49, id_docente: 9, horario: 'Viernes 09:00-11:00', aula: 'O1501', id_cuatrimestre: 2 },
  { id_materia: 50, id_docente: 10, horario: 'Viernes 11:00-13:00', aula: 'O1502', id_cuatrimestre: 2 },
  { id_materia: 51, id_docente: 11, horario: 'Lunes 17:00-19:00', aula: 'P1601', id_cuatrimestre: 3 },
  { id_materia: 52, id_docente: 12, horario: 'Lunes 19:00-21:00', aula: 'P1602', id_cuatrimestre: 3 },
  { id_materia: 53, id_docente: 13, horario: 'Martes 17:00-19:00', aula: 'Q1701', id_cuatrimestre: 3 },
  { id_materia: 54, id_docente: 14, horario: 'Martes 19:00-21:00', aula: 'Q1702', id_cuatrimestre: 3 },
  { id_materia: 55, id_docente: 15, horario: 'Miércoles 17:00-19:00', aula: 'R1801', id_cuatrimestre: 3 },
  { id_materia: 56, id_docente: 16, horario: 'Miércoles 19:00-21:00', aula: 'R1802', id_cuatrimestre: 3 },
  { id_materia: 57, id_docente: 17, horario: 'Jueves 17:00-19:00', aula: 'S1901', id_cuatrimestre: 3 },
  { id_materia: 58, id_docente: 18, horario: 'Jueves 19:00-21:00', aula: 'S1902', id_cuatrimestre: 3 },
  { id_materia: 59, id_docente: 19, horario: 'Viernes 17:00-19:00', aula: 'T2001', id_cuatrimestre: 3 },
  { id_materia: 60, id_docente: 20, horario: 'Viernes 19:00-21:00', aula: 'T2002', id_cuatrimestre: 3 },

    ],
  });
  
  await prisma.ofertaAcademica.createMany({
    data: [
      // Ingeniería en Sistemas
      
        { id_carrera: 1, id_cuatrimestre: 1, id_curso: 1, anno: '2025' }, // Introducción a la Programación
        { id_carrera: 1, id_cuatrimestre: 1, id_curso: 2, anno: '2025' }, // Matemáticas Discretas
        { id_carrera: 1, id_cuatrimestre: 1, id_curso: 3, anno: '2025' }, // Álgebra Lineal
      
        { id_carrera: 1, id_cuatrimestre: 2, id_curso: 4, anno: '2025' }, // Fundamentos de Computación
        { id_carrera: 1, id_cuatrimestre: 2, id_curso: 5, anno: '2025' },
        { id_carrera: 1, id_cuatrimestre: 2, id_curso: 6, anno: '2025' },
      
        { id_carrera: 1, id_cuatrimestre: 3, id_curso: 7, anno: '2025' },
        { id_carrera: 1, id_cuatrimestre: 3, id_curso: 8, anno: '2025' },
        { id_carrera: 1, id_cuatrimestre: 3, id_curso: 9, anno: '2025' },
      
        { id_carrera: 1, id_cuatrimestre: 4, id_curso: 10, anno: '2025' },
        { id_carrera: 1, id_cuatrimestre: 4, id_curso: 11, anno: '2025' },
        { id_carrera: 1, id_cuatrimestre: 4, id_curso: 12, anno: '2025' },
      
        { id_carrera: 1, id_cuatrimestre: 5, id_curso: 13, anno: '2025' },
        { id_carrera: 1, id_cuatrimestre: 5, id_curso: 14, anno: '2025' },
        { id_carrera: 1, id_cuatrimestre: 5, id_curso: 15, anno: '2025' },
      
        { id_carrera: 1, id_cuatrimestre: 6, id_curso: 16, anno: '2025' },
        { id_carrera: 1, id_cuatrimestre: 6, id_curso: 17, anno: '2025' },
        { id_carrera: 1, id_cuatrimestre: 6, id_curso: 18, anno: '2025' }
      ,
      // Administración de Empresas
      { id_carrera: 2, id_cuatrimestre: 1, id_curso: 5, anno: '2025'}, // Introducción a la Administración
      { id_carrera: 2, id_cuatrimestre: 1, id_curso: 6, anno: '2025'}, // Contabilidad General
      { id_carrera: 2, id_cuatrimestre: 1, id_curso: 7, anno: '2025'}, // Economía Básica
      { id_carrera: 2, id_cuatrimestre: 1, id_curso: 8, anno: '2025' }, // Comunicación Organizacional
  
      // Medicina
      { id_carrera: 3, id_cuatrimestre: 1, id_curso: 9, anno: '2025' }, // Anatomía Humana
      { id_carrera: 3, id_cuatrimestre: 1, id_curso: 10, anno: '2025' }, // Biología Celular y Molecular
      { id_carrera: 3, id_cuatrimestre: 1, id_curso: 11, anno: '2025' }, // Bioquímica Médica
      { id_carrera: 3, id_cuatrimestre: 1, id_curso: 12, anno: '2025' }, // Introducción a la Medicina
  
      // Derecho
      { id_carrera: 4, id_cuatrimestre: 1, id_curso: 13, anno: '2025' }, // Introducción al Derecho
      { id_carrera: 4, id_cuatrimestre: 1, id_curso: 14, anno: '2025' }, // Derecho Constitucional
      { id_carrera: 4, id_cuatrimestre: 1, id_curso: 15, anno: '2025' }, // Teoría del Estado
      { id_carrera: 4, id_cuatrimestre: 1, id_curso: 16, anno: '2025' }, // Sociología Jurídica
  
      // Arquitectura
      { id_carrera: 5, id_cuatrimestre: 1, id_curso: 17, anno: '2025' }, // Dibujo Arquitectónico
      { id_carrera: 5, id_cuatrimestre: 1, id_curso: 18, anno: '2025' }, // Historia de la Arquitectura
      { id_carrera: 5, id_cuatrimestre: 1, id_curso: 19, anno: '2025' }, // Geometría Descriptiva
      { id_carrera: 5, id_cuatrimestre: 1, id_curso: 20, anno: '2025' }, // Materiales de Construcción
  
      // Psicología
      { id_carrera: 6, id_cuatrimestre: 1, id_curso: 21, anno: '2025' }, // Introducción a la Psicología
      { id_carrera: 6, id_cuatrimestre: 1, id_curso: 22, anno: '2025' }, // Psicología del Desarrollo
      { id_carrera: 6, id_cuatrimestre: 1, id_curso: 23, anno: '2025' }, // Bases Biológicas del Comportamiento
      { id_carrera: 6, id_cuatrimestre: 1, id_curso: 24, anno: '2025' }, // Métodos de Investigación en Psicología
  
      // Ingeniería Industrial
      { id_carrera: 7, id_cuatrimestre: 1, id_curso: 25, anno: '2025' }, // Introducción a la Ingeniería Industrial
      { id_carrera: 7, id_cuatrimestre: 1, id_curso: 26, anno: '2025' }, // Estadística Aplicada
      { id_carrera: 7, id_cuatrimestre: 1, id_curso: 27, anno: '2025' }, // Álgebra y Trigonometría
      { id_carrera: 7, id_cuatrimestre: 1, id_curso: 28, anno: '2025' }, // Procesos de Manufactura
  
      // Diseño Gráfico
      { id_carrera: 8, id_cuatrimestre: 1, id_curso: 29, anno: '2025' }, // Fundamentos del Diseño Gráfico
      { id_carrera: 8, id_cuatrimestre: 1, id_curso: 30, anno: '2025' }, // Historia del Arte y el Diseño
      { id_carrera: 8, id_cuatrimestre: 1, id_curso: 31, anno: '2025' }, // Tipografía y Composición
      { id_carrera: 8, id_cuatrimestre: 1, id_curso: 32, anno: '2025' }, // Diseño Digital y Multimedia
    ],
  });
  await prisma.auditoria.createMany({
    data: [
    { id_usuario: 1, accion: 'Agregar Usuario', descripcion: 'Se agregó un nuevo usuario' },
    { id_usuario: 2, accion: 'Actualizar Usuario', descripcion: 'Se actualizó el perfil del usuario' },
    { id_usuario: 3, accion: 'Borrar Usuario', descripcion: 'Se eliminó el usuario del registro de la base de datos' },
    { id_usuario: 1, accion: 'Listar Usuario', descripcion: 'Se consultaron los registros de auditoría' },
    { id_usuario: 2, accion: 'Agregar Curso', descripcion: 'Se agregó un nuevo curso' },
    { id_usuario: 2, accion: 'Actualizar Curso', descripcion: 'Se actualizó el Curso' },
    { id_usuario: 3, accion: 'Borrar Curso', descripcion: 'Se eliminó un Curso de la base de datos' },
    { id_usuario: 1, accion: 'Listar Curso', descripcion: 'Se consultaron los registros de Curso' },
    { id_usuario: 1, accion: 'Agregar Cargo', descripcion: 'Se agregó un nuevo cargo' },
    { id_usuario: 2, accion: 'Actualizar Cargo', descripcion: 'Se actualizó un cargo existente' },
    { id_usuario: 3, accion: 'Borrar Cargo', descripcion: 'Se eliminó un cargo de la base de datos' },
    { id_usuario: 1, accion: 'Listar Cargo', descripcion: 'Se consultaron los registros de Cargo' },
    { id_usuario: 2, accion: 'Agregar Carrera', descripcion: 'Se agregó una nueva carrera' },
    { id_usuario: 2, accion: 'Actualizar Carrera', descripcion: 'Se actualizó una carrera existente' },
    { id_usuario: 3, accion: 'Borrar Carrera', descripcion: 'Se eliminó una carrera de la base de datos' },
    { id_usuario: 1, accion: 'Listar Carrera', descripcion: 'Se consultaron los registros de Carrera' },
    { id_usuario: 2, accion: 'Agregar Materia', descripcion: 'Se agregó una nueva materia' },
    { id_usuario: 2, accion: 'Actualizar Materia', descripcion: 'Se actualizó una materia existente' },
    { id_usuario: 3, accion: 'Borrar Materia', descripcion: 'Se eliminó una materia de la base de datos' },
    { id_usuario: 1, accion: 'Listar Materia', descripcion: 'Se consultaron los registros de Materia' },
  ],
});
  await prisma.historicoAcademico.createMany({
    data: [
      // Usuario 1 - Ingeniería en Sistemas
      { id_usuario: 1, id_curso: 1, nota: 85.5 },
      { id_usuario: 1, id_curso: 2, nota: 78.0 },
      { id_usuario: 1, id_curso: 4, nota: 88.4 },
      { id_usuario: 1, id_curso: 5, nota: 79.6 },
  
      // Usuario 2 - Administración de Empresas
      { id_usuario: 2, id_curso: 6, nota: 88.7 },
      { id_usuario: 2, id_curso: 7, nota: 92.1 },
      { id_usuario: 2, id_curso: 8, nota: 79.5 },
      { id_usuario: 2, id_curso: 9, nota: 85.3 },
      { id_usuario: 2, id_curso: 10, nota: 91.8 },
  
      // Usuario 3 - Medicina
      { id_usuario: 3, id_curso: 11, nota: 91.3 },
      { id_usuario: 3, id_curso: 12, nota: 85.0 },
      { id_usuario: 3, id_curso: 13, nota: 87.4 },
      { id_usuario: 3, id_curso: 14, nota: 92.0 },
      { id_usuario: 3, id_curso: 15, nota: 78.9 },
  
      // Usuario 4 - Derecho
      { id_usuario: 4, id_curso: 16, nota: 75.5 },
      { id_usuario: 4, id_curso: 17, nota: 80.0 },
      { id_usuario: 4, id_curso: 18, nota: 88.9 },
      { id_usuario: 4, id_curso: 19, nota: 84.2 },
      { id_usuario: 4, id_curso: 20, nota: 90.1 },
  
      // Usuario 5 - Arquitectura
      { id_usuario: 5, id_curso: 21, nota: 95.0 },
      { id_usuario: 5, id_curso: 22, nota: 89.5 },
      { id_usuario: 5, id_curso: 23, nota: 93.7 },
      { id_usuario: 5, id_curso: 24, nota: 88.1 },
      { id_usuario: 5, id_curso: 25, nota: 84.6 },
  
      // Usuario 6 - Psicología
      { id_usuario: 6, id_curso: 26, nota: 84.2 },
      { id_usuario: 6, id_curso: 27, nota: 78.6 },
      { id_usuario: 6, id_curso: 28, nota: 86.3 },
      { id_usuario: 6, id_curso: 29, nota: 89.4 },
      { id_usuario: 6, id_curso: 30, nota: 92.7 },
  
      // Usuario 7 - Ingeniería Industrial
      { id_usuario: 7, id_curso: 31, nota: 82.0 },
      { id_usuario: 7, id_curso: 32, nota: 79.8 },
      { id_usuario: 7, id_curso: 33, nota: 90.1 },
      { id_usuario: 7, id_curso: 34, nota: 83.5 },
      { id_usuario: 7, id_curso: 35, nota: 85.9 },
  
      // Usuario 8 - Diseño Gráfico
      { id_usuario: 8, id_curso: 36, nota: 88.3 },
      { id_usuario: 8, id_curso: 37, nota: 92.5 },
      { id_usuario: 8, id_curso: 38, nota: 85.9 },
      { id_usuario: 8, id_curso: 39, nota: 87.2 },
      { id_usuario: 8, id_curso: 40, nota: 80.4 },
  
      // Usuario 9 - Ingeniería en Sistemas
      { id_usuario: 9, id_curso: 41, nota: 91.1 },
      { id_usuario: 9, id_curso: 42, nota: 86.7 },
      { id_usuario: 9, id_curso: 43, nota: 88.9 },
      { id_usuario: 9, id_curso: 44, nota: 90.0 },
      { id_usuario: 9, id_curso: 45, nota: 79.3 },
  
      // Usuario 10 - Medicina
      { id_usuario: 10, id_curso: 46, nota: 94.5 },
      { id_usuario: 10, id_curso: 47, nota: 85.8 },
      { id_usuario: 10, id_curso: 48, nota: 89.1 },
      { id_usuario: 10, id_curso: 49, nota: 87.3 },
      { id_usuario: 10, id_curso: 50, nota: 82.6 },
  
      // Usuario 11 - Derecho
      { id_usuario: 11, id_curso: 51, nota: 80.2 },
      { id_usuario: 11, id_curso: 52, nota: 88.4 },
      { id_usuario: 11, id_curso: 53, nota: 91.0 },
      { id_usuario: 11, id_curso: 54, nota: 86.9 },
      { id_usuario: 11, id_curso: 55, nota: 77.5 },
  
      // Usuario 12 - Psicología
      { id_usuario: 12, id_curso: 56, nota: 92.0 },
      { id_usuario: 12, id_curso: 57, nota: 81.5 },
      { id_usuario: 12, id_curso: 58, nota: 89.6 },
      { id_usuario: 12, id_curso: 59, nota: 85.3 },
      { id_usuario: 12, id_curso: 60, nota: 90.8 },
    ],
  });
  await prisma.historicoAcademico.createMany({
    data: [
      { id_usuario: 3, id_curso: 1, nota: 85.5 },
      { id_usuario: 3, id_curso: 2, nota: 78.0 },
      { id_usuario: 3, id_curso: 3, nota: 82.4 },
      { id_usuario: 3, id_curso: 4, nota: 88.4 },
      { id_usuario: 3, id_curso: 5, nota: 79.6 },
      { id_usuario: 3, id_curso: 6, nota: 91.1 },
      { id_usuario: 3, id_curso: 7, nota: 84.3 },
      { id_usuario: 3, id_curso: 8, nota: 86.0 },
      { id_usuario: 3, id_curso: 9, nota: 80.5 },
      { id_usuario: 3, id_curso: 10, nota: 89.0 },
    ],
  });
  await prisma.matricula.createMany({
    data: [
      // Matriculas para usuario 1 con cursos 1, 2, 27
      { id_usuario: 1, id_curso: 1, estado: "Activa" },
      { id_usuario: 1, id_curso: 2, estado: "Activa" },
      { id_usuario: 1, id_curso: 27, estado: "Activa" },
  
      // Matriculas para usuario 2 con cursos 3, 4, 39
      { id_usuario: 2, id_curso: 3, estado: "Activa" },
      { id_usuario: 2, id_curso: 4, estado: "Activa" },
      { id_usuario: 2, id_curso: 39, estado: "Activa" },
  
      // Matriculas para usuario 3 con cursos 5, 6, 28
      { id_usuario: 3, id_curso: 5, estado: "Activa" },
      { id_usuario: 3, id_curso: 6, estado: "Activa" },
      { id_usuario: 3, id_curso: 28, estado: "Activa" },
  
      // Matriculas para usuario 4 con cursos 7, 38
      { id_usuario: 4, id_curso: 7, estado: "Activa" },
      { id_usuario: 4, id_curso: 38, estado: "Activa" },
  
      // Matriculas para usuario 5 con cursos 8, 9, 29
      { id_usuario: 5, id_curso: 8, estado: "Activa" },
      { id_usuario: 5, id_curso: 9, estado: "Activa" },
      { id_usuario: 5, id_curso: 29, estado: "Activa" },
  
      // Matriculas para usuario 6 con cursos 10, 40
      { id_usuario: 6, id_curso: 10, estado: "Activa" },
      { id_usuario: 6, id_curso: 40, estado: "Activa" },
  
      // Matriculas para usuario 7 con cursos 11, 30
      { id_usuario: 7, id_curso: 11, estado: "Activa" },
      { id_usuario: 7, id_curso: 30, estado: "Activa" },
  
      // Matriculas para usuario 8 con cursos 12, 13
      { id_usuario: 8, id_curso: 12, estado: "Activa" },
      { id_usuario: 8, id_curso: 13, estado: "Activa" },
  
      // Matriculas para usuario 9 con cursos 14, 37
      { id_usuario: 9, id_curso: 14, estado: "Activa" },
      { id_usuario: 9, id_curso: 37, estado: "Activa" },
  
      // Matriculas para usuario 10 con cursos 15, 16, 31
      { id_usuario: 10, id_curso: 15, estado: "Activa" },
      { id_usuario: 10, id_curso: 16, estado: "Activa" },
      { id_usuario: 10, id_curso: 31, estado: "Activa" },
  
      // Más usuarios con cursos individuales o combinaciones según detalleFactura
      { id_usuario: 11, id_curso: 17, estado: "Activa" },
      { id_usuario: 12, id_curso: 18, estado: "Activa" },
      { id_usuario: 13, id_curso: 19, estado: "Activa" },
      { id_usuario: 14, id_curso: 20, estado: "Activa" },
      { id_usuario: 15, id_curso: 21, estado: "Activa" },
      { id_usuario: 15, id_curso: 33, estado: "Activa" },
      { id_usuario: 16, id_curso: 22, estado: "Activa" },
      { id_usuario: 17, id_curso: 23, estado: "Activa" },
      { id_usuario: 17, id_curso: 34, estado: "Activa" },
      { id_usuario: 18, id_curso: 24, estado: "Activa" },
      { id_usuario: 19, id_curso: 25, estado: "Activa" },
      { id_usuario: 19, id_curso: 35, estado: "Activa" },
      { id_usuario: 20, id_curso: 26, estado: "Activa" },
      { id_usuario: 20, id_curso: 36, estado: "Activa" }
    ],
  });

  await prisma.encabezadoFactura.createMany({
    data: [
      { id_cuatrimestre: 1, id_carrera: 1, id_usuario: 1, fecha_hora: new Date('2024-01-10') },
      { id_cuatrimestre: 1, id_carrera: 2, id_usuario: 2, fecha_hora: new Date('2024-01-15') },
      { id_cuatrimestre: 1, id_carrera: 3, id_usuario: 3, fecha_hora: new Date('2024-01-20') },
      { id_cuatrimestre: 2, id_carrera: 1, id_usuario: 4, fecha_hora: new Date('2024-01-22') },
      { id_cuatrimestre: 2, id_carrera: 2, id_usuario: 5, fecha_hora: new Date('2024-01-25') },
      { id_cuatrimestre: 2, id_carrera: 3, id_usuario: 6, fecha_hora: new Date('2024-02-01') },
      { id_cuatrimestre: 3, id_carrera: 1, id_usuario: 7, fecha_hora: new Date('2024-02-05') },
      { id_cuatrimestre: 3, id_carrera: 2, id_usuario: 8, fecha_hora: new Date('2024-02-10') },
      { id_cuatrimestre: 3, id_carrera: 3, id_usuario: 9, fecha_hora: new Date('2024-02-15') },
      { id_cuatrimestre: 4, id_carrera: 1, id_usuario: 10, fecha_hora: new Date('2024-02-20') },
      { id_cuatrimestre: 4, id_carrera: 2, id_usuario: 11, fecha_hora: new Date('2024-03-01') },
      { id_cuatrimestre: 4, id_carrera: 3, id_usuario: 12, fecha_hora: new Date('2024-03-05') },
      { id_cuatrimestre: 5, id_carrera: 1, id_usuario: 13, fecha_hora: new Date('2024-03-10') },
      { id_cuatrimestre: 5, id_carrera: 2, id_usuario: 14, fecha_hora: new Date('2024-03-15') },
      { id_cuatrimestre: 5, id_carrera: 3, id_usuario: 15, fecha_hora: new Date('2024-03-20') },
      { id_cuatrimestre: 6, id_carrera: 1, id_usuario: 16, fecha_hora: new Date('2024-03-25') },
      { id_cuatrimestre: 6, id_carrera: 2, id_usuario: 17, fecha_hora: new Date('2024-04-01') },
      { id_cuatrimestre: 6, id_carrera: 3, id_usuario: 18, fecha_hora: new Date('2024-04-05') },
      { id_cuatrimestre: 7, id_carrera: 1, id_usuario: 19, fecha_hora: new Date('2024-04-10') },
      { id_cuatrimestre: 7, id_carrera: 2, id_usuario: 20, fecha_hora: new Date('2024-04-15') },
    ],
  });
  
  await prisma.detalleFactura.createMany({
    data: [
      // Factura 1
      { id_curso: 1, id_encabezadofactura: 1, precio_unitario: 130000 },
      { id_curso: 2, id_encabezadofactura: 1, precio_unitario: 130000 },
  
      // Factura 2
      { id_curso: 3, id_encabezadofactura: 2, precio_unitario: 130000 },
      { id_curso: 4, id_encabezadofactura: 2, precio_unitario: 130000 },
  
      // Factura 3
      { id_curso: 5, id_encabezadofactura: 3, precio_unitario: 130000 },
      { id_curso: 6, id_encabezadofactura: 3, precio_unitario: 130000 },
  
      // Factura 4
      { id_curso: 7, id_encabezadofactura: 4, precio_unitario: 130000 },
  
      // Factura 5
      { id_curso: 8, id_encabezadofactura: 5, precio_unitario: 130000 },
      { id_curso: 9, id_encabezadofactura: 5, precio_unitario: 130000 },
  
      // Factura 6
      { id_curso: 10, id_encabezadofactura: 6, precio_unitario: 130000 },
  
      // Factura 7
      { id_curso: 11, id_encabezadofactura: 7, precio_unitario: 130000 },
  
      // Factura 8
      { id_curso: 12, id_encabezadofactura: 8, precio_unitario: 130000 },
      { id_curso: 13, id_encabezadofactura: 8, precio_unitario: 130000 },
  
      // Factura 9
      { id_curso: 14, id_encabezadofactura: 9, precio_unitario: 130000 },
  
      // Factura 10
      { id_curso: 15, id_encabezadofactura: 10, precio_unitario: 130000 },
      { id_curso: 16, id_encabezadofactura: 10, precio_unitario: 130000 },
  
      // Factura 11
      { id_curso: 17, id_encabezadofactura: 11, precio_unitario: 130000 },
  
      // Factura 12
      { id_curso: 18, id_encabezadofactura: 12, precio_unitario: 130000 },
  
      // Factura 13
      { id_curso: 19, id_encabezadofactura: 13, precio_unitario: 130000 },
  
      // Factura 14
      { id_curso: 20, id_encabezadofactura: 14, precio_unitario: 130000 },
  
      // Factura 15
      { id_curso: 21, id_encabezadofactura: 15, precio_unitario: 130000 },
  
      // Factura 16
      { id_curso: 22, id_encabezadofactura: 16, precio_unitario: 130000 },
  
      // Factura 17
      { id_curso: 23, id_encabezadofactura: 17, precio_unitario: 130000 },
  
      // Factura 18
      { id_curso: 24, id_encabezadofactura: 18, precio_unitario: 130000 },
  
      // Factura 19
      { id_curso: 25, id_encabezadofactura: 19, precio_unitario: 130000 },
  
      // Factura 20
      { id_curso: 26, id_encabezadofactura: 20, precio_unitario: 130000 },
  
      // Factura 1 (Detalle adicional)
      { id_curso: 27, id_encabezadofactura: 1, precio_unitario: 130000 },
  
      // Factura 3 (Detalle adicional)
      { id_curso: 28, id_encabezadofactura: 3, precio_unitario: 130000 },
  
      // Factura 5 (Detalle adicional)
      { id_curso: 29, id_encabezadofactura: 5, precio_unitario: 130000 },
  
      // Factura 7 (Detalle adicional)
      { id_curso: 30, id_encabezadofactura: 7, precio_unitario: 130000 },
  
      // Factura 10 (Detalle adicional)
      { id_curso: 31, id_encabezadofactura: 10, precio_unitario: 130000 },
  
      // Factura 12 (Detalle adicional)
      { id_curso: 32, id_encabezadofactura: 12, precio_unitario: 130000 },
  
      // Factura 15 (Detalle adicional)
      { id_curso: 33, id_encabezadofactura: 15, precio_unitario: 130000 },
  
      // Factura 17 (Detalle adicional)
      { id_curso: 34, id_encabezadofactura: 17, precio_unitario: 130000 },
  
      // Factura 19 (Detalle adicional)
      { id_curso: 35, id_encabezadofactura: 19, precio_unitario: 130000 },
  
      // Factura 20 (Detalle adicional)
      { id_curso: 36, id_encabezadofactura: 20, precio_unitario: 130000 },
  
      // Factura 9 (Detalle adicional)
      { id_curso: 37, id_encabezadofactura: 9, precio_unitario: 130000 },
  
      // Factura 4 (Detalle adicional)
      { id_curso: 38, id_encabezadofactura: 4, precio_unitario: 130000 },
  
      // Factura 2 (Detalle adicional)
      { id_curso: 39, id_encabezadofactura: 2, precio_unitario: 130000 },
  
      // Factura 6 (Detalle adicional)
      { id_curso: 40, id_encabezadofactura: 6, precio_unitario: 130000 },
    ],
  });

}



main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
