# matessindramas

Landing educativa desarrollada con Next.js para la marca personal de María Lípiz, profesora de matemáticas universitarias.  
Ofrece servicios de acompañamiento para estudiantes, contenido gratuito y recursos exclusivos para estudiantes.

---

## 🚀 Tecnologías utilizadas

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [clsx](https://github.com/lukeed/clsx)
- [React Rough Notation](https://github.com/rough-stuff/react-rough-notation)
- [Vercel](https://vercel.com) (despliegue continuo)

---

## 🧱 Estructura del proyecto

/src
/app → Routing principal (Next.js App Router)
/components → Componentes reutilizables
/styles → Estilos globales
/lib → Utilidades y funciones comunes
/public → Archivos estáticos

---


---

## 🧪 Flujo de ramas (Git + Vercel)

- `main`: versión **estable** desplegada en producción (ej: https://matessindramas.com)
- `development`: rama de **desarrollo**, desplegada automáticamente en entorno de pruebas (ej: https://matessindramas-git-development-...vercel.app)

### ✍️ Recomendación de trabajo

1. Trabaja siempre en `development`
2. Haz push para ver el resultado en Vercel (entorno preview)
3. Cuando esté listo:

```bash
git checkout main
git merge development
git push origin main


📬 Contacto
Autora: Maria Lipiz
Email: hello@matessindramas
Repositorio: github.com/MariaLipiz/matessindramas