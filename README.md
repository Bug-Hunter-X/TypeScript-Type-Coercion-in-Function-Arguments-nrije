# TypeScript Type Coercion Issue

This example demonstrates a subtle issue in TypeScript where type coercion can lead to unexpected behavior if not handled carefully.  The `add` function is defined to accept two numbers, but when called with a string, TypeScript doesn't throw a type error; it attempts to coerce the string to a number, resulting in `NaN`.

This demonstrates the importance of strict type checking in TypeScript and ways to mitigate such issues. The solution demonstrates using type guards for safer type checking.