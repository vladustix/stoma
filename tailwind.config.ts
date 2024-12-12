import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1/1',
        video: '16/9'
      },
      colors: {
        'primary': {
          DEFAULT: '#3B82F6',
        }
      }
    }
  }
}
