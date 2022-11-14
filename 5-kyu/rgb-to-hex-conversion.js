/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value. */

function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(a) {
  if (a > 255) return "FF";
  if (a < 0) return "00";
  return (a + 0x10000).toString(16).substr(-2).toUpperCase();
}

console.log(rgb(0, 0, 236));
