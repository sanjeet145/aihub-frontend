
import Button from '@mui/material/Button';

export default function MUIButton({icon, value, variant=contained}) {
  return (
      <Button variant={variant} startIcon={icon}>
        {value}
      </Button>
  );
}