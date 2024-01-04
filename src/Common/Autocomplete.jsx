import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutocompleteComponents() {
   return (
      <Autocomplete
         className='my-autocomplete'
         disablePortal
         id='category-autocomplete'
         options={FoodCategories}
         renderInput={(params) => (
            <TextField
               {...params}
               label='All Categories'
               InputProps={{
                  ...params.InputProps,
               }}
            />
         )}
      />
   );
}

const FoodCategories = [
   { label: 'Fruits & Vegetables' },
   { label: 'Meat & Seafood' },
   { label: 'Dairy & Eggs' },
   { label: 'Bakery & Snacks' },
   { label: 'Beverages' },
   { label: 'Canned & Packaged Foods' },
   { label: 'Frozen Foods' },
   { label: 'Grains & Pasta' },
   { label: 'Condiments & Sauces' },
   { label: 'Sweets & Desserts' },
   { label: 'Organic Foods' },
   { label: 'Gluten-Free Products' },
   { label: 'International Cuisine' },
   { label: 'Ready-to-Eat Meals' },
   { label: 'Health & Wellness' },
   { label: 'Baby & Toddler Foods' },
   { label: 'Kitchen Essentials' },
   { label: 'Snack Foods' },
   { label: 'Specialty Diets' },
];
