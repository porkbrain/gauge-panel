
export interface Gauges {

  /**
   * References airspeed indicator element.
   */
  asi: Element

  /**
   * Flight director attitude indicator elements.
   */
  fdai: {
    /**
     * Whether the nose is left or right and by how much.
     */
    yaw: Element,

    /**
     * Whether the nose is up or down and by how much.
     */
    pitch: Element,
  }

}