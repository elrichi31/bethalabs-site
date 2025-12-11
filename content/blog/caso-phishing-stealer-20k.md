---
title: "Caso Real: Cómo Evitamos el Robo de $20,000 a una PyME Ecuatoriana"
excerpt: "Detectamos a tiempo un sofisticado ataque de phishing con malware stealer que intentaba robar $20,000 mediante un crédito fraudulento. Análisis completo del caso."
date: "2025-10-05"
author: "BethaLabs Team"
category: "Ciberseguridad"
tags: ["phishing", "malware", "stealer", "caso real", "Ecuador"]
image: "/blog/caso-phishing-stealer.avif"
readTime: "12 min"
---

# La Llamada que lo Cambió Todo

Era un viernes por la tarde cuando recibimos la llamada. Un empresario de Quito, claramente alterado, nos contó algo inquietante: acababa de recibir un correo del Banco Pichincha confirmando que su solicitud de crédito por $20,000 dólares estaba siendo procesada.

El detalle que lo llevó a llamarnos: **él nunca había solicitado ese crédito**.

Lo que descubrimos después de analizar su computadora fue un caso de manual de ciberseguridad. Un malware stealer había estado robando sus credenciales bancarias durante días, y los atacantes ya habían usado esa información para solicitar un crédito a su nombre. El plan era simple: aprobar el crédito, transferir el dinero y desaparecer.

Esta es la historia completa de cómo detectamos el ataque y evitamos que perdiera $20,000.

## Resumen del Incidente

Antes de entrar en los detalles técnicos, aquí está el panorama completo:

| Detalle | Información |
|---------|-------------|
| **Víctima** | PyME en Quito, Ecuador |
| **Amenaza** | Malware Stealer con Keylogger |
| **Vector de Ataque** | Correo de phishing con archivo adjunto .uu |
| **Daño Potencial** | $20,000 USD (crédito fraudulento) |
| **Tiempo de Respuesta** | 24 horas |
| **Resultado** | Crédito cancelado, $20,000 salvados |

## Cómo Empezó Todo: La Cronología del Ataque

### Día 1: El Correo que Parecía Legítimo

Nuestro cliente recibió un correo electrónico de lo que parecía ser una empresa interesada en hacer negocios. Nada fuera de lo común para alguien que maneja una PyME y está acostumbrado a recibir solicitudes de cotización.
Nuestro cliente recibió un correo electrónico de lo que parecía ser una empresa interesada en hacer negocios. Nada fuera de lo común para alguien que maneja una PyME y está acostumbrado a recibir solicitudes de cotización.

El correo tenía todos los elementos que suelen tener los correos legítimos:
- Lenguaje profesional y cortés
- Logo de una empresa real
- Asunto relevante a su línea de negocio
- Un archivo adjunto: "Orden de compra cotización No 140467.uu"

Pensando que era una oportunidad de negocio real, abrió el archivo. Error fatal.

### Días 3-5: El Trabajo Silencioso del Malware

Durante los días siguientes, mientras el cliente trabajaba normalmente en su computadora, el malware estaba haciendo su trabajo en segundo plano:

- Capturaba cada tecla que presionaba (keylogger activo)
- Robó las credenciales cuando inició sesión en el Banco Pichincha
- Extrajo contraseñas guardadas en Chrome y Edge
- Envió toda esta información a servidores controlados por los atacantes

Todo esto pasó completamente desapercibido. No hubo alertas, no hubo señales obvias. La computadora funcionaba con normalidad.

### Día 7: La Notificación del Banco

Aquí es donde las cosas se pusieron serias. El cliente recibió un correo oficial del Banco Pichincha:

> "Estimado cliente, su solicitud de crédito por $20,000 USD está en proceso de evaluación. Le informaremos sobre su aprobación en los próximos días."

En ese momento supo que algo andaba muy mal. Él no había solicitado ningún crédito. Fue entonces cuando nos llamó.

## El Análisis Técnico: Desarmando el Malware

Cuando recibimos el caso, lo primero que hicimos fue analizar el archivo malicioso que había abierto. Aquí es donde las cosas se pusieron interesantes desde el punto de vista técnico.

### Paso 1: Extracción y Primer Análisis

El archivo adjunto tenía una extensión poco común: `.uu` (formato UUEncode). No es algo que veas todos los días, pero es un formato válido de codificación. Dentro había un archivo RAR protegido con contraseña.

```bash
# Extracción con ripmime (herramienta forense)
$ mkdir out && ripmime -i correo.txt -d out
$ file out/*

out/Orden de compra cotización No 140467.uu: RAR archive data, v5
```

### Paso 2: VirusTotal Confirma lo Peor

Subimos el archivo a VirusTotal, una plataforma que analiza archivos con más de 60 motores antivirus diferentes. Los resultados fueron alarmantes:

- **37 de 64 antivirus** detectaron el archivo como malicioso
- Clasificación: MALWARE | STEALER | TROJAN | EVADER
- Hash SHA256: `bccdedf0c19d758ffce2a222776b1878c377713c4e3512cee9cf5e3eadec0bf9`

Esto confirmó que estábamos lidiando con malware real, no con una falsa alarma.

### Paso 3: Análisis de Comportamiento

Ejecutamos el malware en un entorno controlado (sandbox) para ver exactamente qué hacía. Los resultados fueron preocupantes:

**Archivos que el malware intentó robar:**
- Base de datos de contraseñas de Google Chrome
- Base de datos de contraseñas de Microsoft Edge  
- Historial completo de navegación
- Cookies de sesión activas

**Comunicación con servidores externos:**

El malware se conectaba a varios servidores para hacer su trabajo:
- `ip-api.com` - Para obtener información de la ubicación de la víctima
- `ftp://ftp.libreriagandhi.cl` - Un servidor FTP comprometido en Chile donde enviaba los datos robados
- Credenciales FTP usadas: `zativax1@libreriagandhi.cl`

**Técnicas de evasión detectadas:**

Este no era un malware amateur. Tenía varios trucos bajo la manga para evitar ser detectado:
- Detecta si está corriendo en una máquina virtual (para evitar análisis)
- Verifica los adaptadores de red buscando entornos de prueba
- Usa retrasos artificiales para confundir sistemas de detección automática
- Consulta información del BIOS para identificar sandboxes

## Indicadores de Compromiso (Para Profesionales de TI)

Si trabajas en seguridad informática, estos son los indicadores técnicos del malware:

**Archivos Maliciosos:**
```
Nombre: Orden de compra cotización No 140467.uu
Hash: bccdedf0c19d758ffce2a222776b1878c377713c4e3512cee9cf5e3eadec0bf9
Tipo: RAR → Ejecutable .exe (Stealer)
```

**Dominios y URLs Maliciosos:**
- `ftp://ftp.libreriagandhi.cl` (servidor comprometido)
- `ip-api.com` (lookup de IP)

**Rutas de Archivos Creados:**
```
C:\Users\[usuario]\AppData\Local\Temp\alarmingness
C:\Users\[usuario]\AppData\Local\Temp\myriopodous
C:\ProgramData\Microsoft\Windows Security Health\Logs
```

**Procesos Maliciosos:**
```
RegSvcs.exe (abusado para ejecutar código malicioso)
unarchiver.exe (extrae el RAR)
7za.exe (descomprime archivos)
```

## Cómo Solucionamos el Problema

Una vez que entendimos la magnitud del ataque, teníamos que actuar rápido. El reloj corría y el crédito podía ser aprobado en cualquier momento.

### 1. Análisis Forense y Evaluación del Daño

Primero necesitábamos saber exactamente qué información había sido comprometida:
- Confirmamos que las credenciales bancarias fueron robadas
- Identificamos el tipo exacto de malware y sus capacidades
- Determinamos desde cuándo estaba activo en el sistema

### 2. Contención Inmediata

Con la información en mano, tomamos medidas urgentes:
- Bloqueamos temporalmente el acceso a la banca en línea del cliente
- Contactamos directamente al Banco Pichincha para reportar el fraude
- Iniciamos el proceso de cancelación del crédito fraudulento
- Limpiamos completamente la computadora del malware

### 3. Cambio de Credenciales

Una vez que el sistema estaba limpio, procedimos a cambiar todo:
- Contraseñas bancarias (todas, no solo la principal)
- Credenciales de correo electrónico
- Contraseñas de cualquier servicio importante
- Habilitamos autenticación de dos factores en todo lo posible

### 4. Reporte Formal al Banco

Preparamos un informe técnico completo para el banco que incluía:
- Hash del malware y enlace a VirusTotal
- Capturas de pantalla del análisis
- Cronología detallada del ataque
- Pruebas de que el cliente fue víctima de phishing

El banco aceptó la evidencia. El crédito fue cancelado. Los $20,000 estaban a salvo.

## Lo Que Aprendimos de Este Caso

### Las Señales de Alerta Que Se Ignoraron

Cuando revisamos el caso completo, había varias banderas rojas que pasaron desapercibidas:

1. **Extensión de archivo inusual** - Los archivos .uu no son comunes en comunicaciones comerciales normales
2. **Empresa desconocida** - El cliente nunca había tenido contacto previo con esta "empresa"
3. **Sentido de urgencia artificial** - El correo sugería que necesitaban respuesta rápida
4. **Archivo comprimido con contraseña** - Esta es una técnica común para evadir filtros de seguridad de email

Ninguna de estas señales por sí sola es definitiva, pero todas juntas deberían haber levantado sospechas.

### Cómo Prevenir Este Tipo de Ataques

**Si manejas una empresa:**

- Capacita a tu equipo regularmente sobre phishing. No basta con una charla al año.
- Implementa filtros de correo más robustos. Los filtros básicos ya no son suficientes.
- Usa soluciones antivirus empresariales, no las versiones gratuitas.
- Realiza auditorías de seguridad periódicas. Si no las haces, no sabes qué vulnerabilidades tienes.

**Si eres usuario individual:**

- Desconfía de archivos adjuntos no solicitados, especialmente de remitentes desconocidos.
- Activa la autenticación de dos factores en tu banco. Siempre.
- Si recibes notificaciones bancarias extrañas, llama directamente al banco. No uses los números de teléfono que vengan en el correo.
- Mantén backups de tu información importante. No en la misma computadora.

## El Impacto Final

| Métrica | Resultado |
|---------|-----------|
| **Dinero Salvado** | $20,000 USD |
| **Tiempo de Respuesta** | 24 horas |
| **Sistemas Analizados** | 1 PC, 2 navegadores, 1 cuenta bancaria |
| **Credenciales Comprometidas** | 15+ contraseñas |
| **Estado del Crédito Fraudulento** | Cancelado exitosamente |

## Preguntas Frecuentes

**¿Este malware también afecta teléfonos móviles?**

No, este malware específico solo funciona en Windows. Pero existen variantes para Android que hacen algo aún peor: interceptan los códigos de autenticación de dos factores que llegan por SMS o apps bancarias.

**¿Por qué el antivirus no detectó el malware?**

Windows Defender sí marcó el archivo como sospechoso, pero no lo bloqueó automáticamente porque el usuario lo ejecutó manualmente. Además, el malware tenía técnicas de evasión específicamente diseñadas para evitar detección.

**¿Cómo puedo saber si mi computadora está infectada?**

Algunas señales comunes:
- La computadora está inusualmente lenta sin razón aparente
- Hay actividad de red constante incluso cuando no estás usando internet
- Te desloguean inesperadamente de bancos o redes sociales
- Aparecen archivos nuevos en las carpetas temporales que no reconoces

**¿Qué hago si recibo un correo similar?**

1. No abras ningún archivo adjunto
2. Verifica el correo del remitente (muchas veces usan dominios similares pero no exactos)
3. Si es supuestamente de una empresa real, llámalos directamente
4. Elimina el correo y repórtalo como spam

## ¿Necesitas Ayuda?

En BethaLabs nos especializamos en casos como este. Ofrecemos:

- Análisis forense de malware
- Auditorías de seguridad para PyMEs
- Protección anti-phishing empresarial  
- Capacitación en ciberseguridad

## Contacto

Si recibiste un correo sospechoso o crees que tu computadora puede estar comprometida:

**Email**: bethalabs.dev@gmail.com  
**Ubicación**: Quito, Ecuador (presencial) + Latinoamérica (remoto)  
**Tiempo de respuesta**: 2-4 horas en casos urgentes

## Conclusión

Este caso demuestra algo importante: los ataques de phishing ya no son emails mal escritos con errores ortográficos evidentes. Ahora son sofisticados, convincentes y potencialmente devastadores.

La diferencia entre perder $20,000 y salvarlos fue:

1. Reaccionar rápido ante señales de alarma
2. Tener acceso a análisis técnico profesional
3. Coordinación efectiva con el banco
4. Implementar medidas preventivas para el futuro

La prevención siempre será más barata que la recuperación. Y en ciberseguridad, el conocimiento es literalmente dinero.

---

¿Te resultó útil este análisis? Compártelo con otros empresarios para ayudarles a evitar ataques similares.

¿Necesitas una auditoría de seguridad para tu empresa? Escríbenos a bethalabs.dev@gmail.com
