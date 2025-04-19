/**
 * Criptografa um texto usando a Cifra de César
 * @param {string} text - Texto a ser criptografado
 * @param {number} shift - Valor do deslocamento
 * @returns {string} - Texto criptografado
 */
export const encryptCaesar = (text, shift) => {
    return text.split('').map(char => {
      // Verificar se o caractere é uma letra
      if (/[a-zA-Z]/.test(char)) {
        // Determinar o código base (97 para 'a', 65 para 'A')
        const base = char.charCodeAt(0) < 91 ? 65 : 97;
        
        // Aplicar a fórmula da cifra de César: (x + n) % 26
        const shifted = (char.charCodeAt(0) - base + parseInt(shift)) % 26;
        
        // Converter de volta para um caractere
        return String.fromCharCode(shifted + base);
      }
      // Retornar o caractere sem alteração se não for uma letra
      return char;
    }).join('');
  };
  
  /**
   * Descriptografa um texto usando a Cifra de César
   * @param {string} text - Texto a ser descriptografado
   * @param {number} shift - Valor do deslocamento
   * @returns {string} - Texto descriptografado
   */
  export const decryptCaesar = (text, shift) => {
    // Para descriptografar, usamos o deslocamento negativo
    return encryptCaesar(text, (26 - (parseInt(shift) % 26)) % 26);
  };