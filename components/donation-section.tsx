"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, Trash2 } from "lucide-react"

interface Donation {
  id: string
  amount: number
  date: string
}

export function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [showThankYou, setShowThankYou] = useState(false)
  const [donations, setDonations] = useState<Donation[]>([])
  const [totalDonated, setTotalDonated] = useState(0)

  const presetAmounts = [1, 5, 10]

  useEffect(() => {
    const savedDonations = localStorage.getItem("nutrilab_donations")
    if (savedDonations) {
      const parsed = JSON.parse(savedDonations)
      setDonations(parsed)
      const total = parsed.reduce((sum: number, d: Donation) => sum + d.amount, 0)
      setTotalDonated(total)
    }
  }, [])

  const handleDonate = () => {
    const amount = selectedAmount || Number.parseFloat(customAmount)
    if (amount && amount > 0) {
      const newDonation: Donation = {
        id: Date.now().toString(),
        amount: amount,
        date: new Date().toLocaleString("es-MX", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      }

      const updatedDonations = [newDonation, ...donations]
      setDonations(updatedDonations)
      setTotalDonated(totalDonated + amount)
      localStorage.setItem("nutrilab_donations", JSON.stringify(updatedDonations))

      setShowThankYou(true)
      setTimeout(() => {
        setShowThankYou(false)
        setSelectedAmount(null)
        setCustomAmount("")
      }, 3000)
    }
  }

  const clearHistory = () => {
    setDonations([])
    setTotalDonated(0)
    localStorage.removeItem("nutrilab_donations")
  }

  const currentAmount = selectedAmount || (customAmount ? Number.parseFloat(customAmount) : 0)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-red-500 fill-red-500" />
            <h2 className="text-4xl font-bold text-gray-900">Apoya a NutriLab</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tu donación nos ayuda a seguir ofreciendo talleres de nutrición saludable para más adolescentes en nuestra
            comunidad
          </p>
        </div>

        <Card className="p-8 bg-white shadow-xl">
          {showThankYou ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-green-600 fill-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias por tu apoyo!</h3>
              <p className="text-gray-600">Tu donación de ${currentAmount.toFixed(2)} MXN hace la diferencia</p>
              <Button
                onClick={() => setShowThankYou(false)}
                className="mt-6 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              >
                Donar de Nuevo
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-4">Selecciona una cantidad:</label>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {presetAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount ? "default" : "outline"}
                      size="lg"
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount("")
                      }}
                      className={`text-lg font-bold h-16 ${
                        selectedAmount === amount
                          ? "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                          : "hover:border-blue-600"
                      }`}
                    >
                      ${amount} MXN
                    </Button>
                  ))}
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">O ingresa tu cantidad:</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                    <Input
                      type="number"
                      min="1"
                      step="0.01"
                      placeholder="0.00"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setSelectedAmount(null)
                      }}
                      className="pl-8 pr-16 h-12 text-lg"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">MXN</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleDonate}
                disabled={!currentAmount || currentAmount <= 0}
                size="lg"
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 disabled:opacity-50"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donar {currentAmount > 0 ? `$${currentAmount.toFixed(2)} MXN` : ""}
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Gracias por tu donación 
              </p>
            </>
          )}
        </Card>

        {donations.length > 0 && (
          <Card className="mt-8 p-6 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Historial de Donaciones</h3>
              <Button variant="ghost" size="sm" onClick={clearHistory} className="text-red-600 hover:text-red-700">
                <Trash2 className="w-4 h-4 mr-1" />
                Limpiar
              </Button>
            </div>
            <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Total donado:</p>
              <p className="text-2xl font-bold text-gray-900">${totalDonated.toFixed(2)} MXN</p>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {donations.map((donation) => (
                <div
                  key={donation.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    <div>
                      <p className="font-semibold text-gray-900">${donation.amount.toFixed(2)} MXN</p>
                      <p className="text-sm text-gray-500">{donation.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        <div className="text-center mt-8">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">NutriLab</span> - Transformando vidas a través de la nutrición
            saludable
          </p>
        </div>
      </div>
    </section>
  )
}
