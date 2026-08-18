import { writeFileSync, mkdirSync } from 'node:fs';
import { swaggerSpec } from '@/config/swagger.js';

mkdirSync('docs', { recursive: true });
writeFileSync('docs/openapi.json', JSON.stringify(swaggerSpec, null, 2));

console.log('✅ OpenAPI spec generated at docs/openapi.json');
