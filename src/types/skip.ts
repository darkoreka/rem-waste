export interface Skip {
    id: number;
    size: number;
    price_before_vat: number | null;
    vat: number;
    hire_period_days: number;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
  }