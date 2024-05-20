/** @odoo-module */

import { useRef, onMounted } from "@odoo/owl";
// hay hooks de utilidad que se pueden usar en cualquier componente
export function useAutofocus(refName) {
  const ref = useRef(refName);
  onMounted(() => {
    ref.el.focus();
  });
}
