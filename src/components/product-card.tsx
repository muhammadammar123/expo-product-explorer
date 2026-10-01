import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ProductCardProps = {
  name: string;
  price: string;
};

export function ProductCard({ name, price }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const theme = useTheme();

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.info}>
        <ThemedText type="smallBold">{name}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {price}
        </ThemedText>
      </View>
      <Pressable
        onPress={() => setAdded(true)}
        style={[
          styles.button,
          { backgroundColor: added ? theme.backgroundSelected : '#208AEF' },
        ]}
        accessibilityRole="button"
        accessibilityLabel={added ? 'Added to cart' : `Add ${name} to cart`}
      >
        <ThemedText
          type="smallBold"
          style={[styles.buttonText, { color: added ? theme.textSecondary : '#ffffff' }]}
        >
          {added ? 'Added to Cart' : 'Add to Cart'}
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two + Spacing.half,
    borderRadius: Spacing.two,
    gap: Spacing.two,
  },
  info: {
    flex: 1,
    gap: Spacing.half,
  },
  button: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.two,
  },
  buttonText: {
    fontSize: 13,
  },
});
