import { useAnimation } from '../hooks/useAnimation'

export function Produccion ({ prodIsVisible }) {
  const { isAnimating } = useAnimation(prodIsVisible)

  return (
    <div>
      {prodIsVisible && (
        <div className={`inicio-container ${isAnimating ? 'show' : ''}`}>
          <h1>PRODUCCION</h1>
        </div>
      )}
    </div>
  )
}
