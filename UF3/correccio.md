Ara puc avaluar completament el codi proporcionat per `validacions.js` i `productes.js` en funció dels criteris d'avaluació de la UF3.

## Avaluació del Codi

### Validació del Formulari (4p)

#### Requisits Generals

- **Validacions només amb JS** (0,5p)

  - **Complert**: El codi utilitza `novalidate` per desactivar les validacions natives HTML i implementa totes les validacions a través de JavaScript.

- **Ús de tres esdeveniments diferents** (0,5p)
  - **Complert parcialment**: Es fan servir `input`, `blur` i `change`. Tot i això, caldria assegurar-se que tots estan ben utilitzats per a les validacions específiques.
  - **Recomanació**: Afegeix `submit` per validar tot el formulari en enviar-lo.

#### Validacions - 1a Part (1p)

- **Nom i cognom**: Han de tenir entre 3 i 50 caràcters i no poden contenir números.
  - **Complert**: El codi valida correctament el nom i el cognom amb aquestes condicions i usa el regex indicat.
- **Correu electrònic**: Ha de tenir un `@` i un `.`.
  - **Complert**: El codi valida correctament l'email amb el regex proporcionat.

#### Validacions - 2a Part (1p)

- **Gènere**: Ha de ser una de les opcions del formulari.

  - **Complert**: El codi valida que el gènere sigui seleccionat.

- **Edat**: L'usuari ha de ser major d'edat.

  - **Complert parcialment**: El codi valida l'edat i mostra un `alert` si l'usuari no és major d'edat. Caldria assegurar-se que també es valida que l'entrada és un número.
  - **Recomanació**: Ja es fa, però cal revisar l'ordre de les validacions i els missatges d'error per millorar la claredat.

- **Missatge**: Ha de tenir entre 10 i 200 caràcters.
  - **Complert**: El codi valida correctament la longitud del missatge.

#### Validacions - 3a Part (1p)

- **Producte**: Ha de ser una de les opcions disponibles.

  - **Complert parcialment**: Encara que el codi carrega correctament els productes al `select`, falta una validació explícita en el moment de l'enviament del formulari per assegurar que el producte seleccionat és una de les opcions disponibles.

- **Quantitat**: Ha de ser un nombre enter entre 1 i 10.
  - **No implementat**: Falta la validació de la quantitat i la mostra d'un `alert` en cas d'error.

### Afegir Productes al Formulari (5p)

1. **Carregar els productes disponibles al formulari (2p)**

   - **Complert**: El codi carrega correctament els productes disponibles com a opcions en el `select` de productes.

2. **Preu per defecte i canvi dinàmic (2p)**

   - **No implementat**: Les funcions `changeQuantity` i `changePrice` estan buides. Caldria actualitzar el camp `price` en funció del producte seleccionat i canviar la quantitat.

3. **Afegir productes a la llista (1p)**
   - **No implementat**: Falta afegir codi per mostrar els productes seleccionats, quantitat i preu total en una llista sota el formulari.

### Conclusions

**Fet bé:**

- Les validacions de nom, cognom, correu electrònic, edat i missatge estan ben implementades i utilitzen els esdeveniments correctament.
- L'ús de `displayError` i `removeExistingError` per mostrar i gestionar els errors és adequat i ben implementat.
- La separació de funcions per a cada validació està ben feta, mantenint el codi modular i llegible.
- La càrrega dinàmica dels productes al formulari funciona correctament.

**Millores necessàries:**

- Completar la validació del producte seleccionat i la quantitat.
- Implementar les funcionalitats de canvi de preu i quantitat de producte.
- Afegeix una funció per validar tots els camps en fer `submit` al formulari.
- Implementar la funcionalitat per afegir els productes seleccionats a una llista sota el formulari, mostrant el nom del producte, la quantitat i el preu total.
- Canviar l'esdeveniment del camp de missatge de `submit` a `input` o `blur`.

Amb aquestes millores, el codi complirà completament els criteris d'avaluació establerts per a la UF3.
