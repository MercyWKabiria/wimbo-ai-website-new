import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mic, Brain, FileText, CheckCircle, TrendingUp, Target } from 'lucide-react'
import { Container, Card, CardContent, CardHeader, CardTitle, CardDescription, FilterToggle, Badge } from '../ui'

/**
 * Tools Section with filter toggles and dynamic content
 */
const ToolsSection = () => {
  const [activeTool, setActiveTool] = useState('vocals')

  const toolOptions = [
    { value: 'vocals', label: 'Test Vocals' },
    { value: 'dialect', label: 'Dialect Intelligence' },
    { value: 'report', label: 'Advisory Report' }
  ]

  const toolsContent = {
    vocals: {
      icon: <Mic className="w-8 h-8" />,
      title: 'Test Vocals',
      subtitle: 'Find the perfect voice for your song',
      description: 'Test your composition with 9 different AI vocal artists, each optimized for specific East African music contexts and emotional ranges.',
      features: [
        { icon: <CheckCircle size={16} />, text: '9 Vocal Artists Available' },
        { icon: <CheckCircle size={16} />, text: 'Real-time Voice Testing' },
        { icon: <CheckCircle size={16} />, text: 'Emotional Range Analysis' },
        { icon: <CheckCircle size={16} />, text: 'Style Compatibility Testing' }
      ],
      stats: [
        { label: 'Vocal Styles', value: '9' },
        { label: 'Dialects', value: '5+' },
        { label: 'Test Accuracy', value: '98%' }
      ]
    },
    dialect: {
      icon: <Brain className="w-8 h-8" />,
      title: 'Dialect Intelligence',
      subtitle: 'Connect with your audience authentically',
      description: 'Analyze and optimize your lyrics for different East African dialects including Sheng, Swahili, Kikuyu, Luo, and more.',
      features: [
        { icon: <Target size={16} />, text: '5+ East African Dialects' },
        { icon: <Target size={16} />, text: 'Cultural Context Analysis' },
        { icon: <Target size={16} />, text: 'Audience Reach Prediction' },
        { icon: <Target size={16} />, text: 'Localization Suggestions' }
      ],
      stats: [
        { label: 'Dialects Covered', value: '5+' },
        { label: 'Cultural Accuracy', value: '95%' },
        { label: 'Market Insights', value: 'Real-time' }
      ]
    },
    report: {
      icon: <FileText className="w-8 h-8" />,
      title: 'Advisory Report',
      subtitle: 'Data-driven insights for success',
      description: 'Get comprehensive analysis on melody strength, arrangement gaps, market positioning, and success patterns based on East African music trends.',
      features: [
        { icon: <TrendingUp size={16} />, text: 'Market Trend Analysis' },
        { icon: <TrendingUp size={16} />, text: 'Success Pattern Recognition' },
        { icon: <TrendingUp size={16} />, text: 'Competitive Intelligence' },
        { icon: <TrendingUp size={16} />, text: 'ROI Predictions' }
      ],
      stats: [
        { label: 'Analysis Points', value: '50+' },
        { label: 'Accuracy Rate', value: '92%' },
        { label: 'Success Stories', value: '100+' }
      ]
    }
  }

  const currentTool = toolsContent[activeTool] || toolsContent.vocals

  return (
    <section id="tools" className="py-20 lg:py-24 bg-background-light">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tools built for how artists
            <span className="text-primary"> actually work.</span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Not how music executives think artists work.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <FilterToggle
            options={toolOptions}
            activeOption={activeTool}
            onChange={setActiveTool}
          />
        </motion.div>

        {/* Tool Content */}
        <motion.div
          key={activeTool}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Content - Tool Info */}
          <div className="space-y-8">
            {/* Tool Header */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="text-primary">
                  {currentTool.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-black text-text-primary">
                  {currentTool.title}
                </h3>
                <p className="text-primary font-medium">
                  {currentTool.subtitle}
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-text-secondary leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {currentTool.description}
            </motion.p>

            {/* Features List */}
            <div className="space-y-4">
              {currentTool.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-text-secondary">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card variant="elevated" className="h-full">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {currentTool.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl md:text-4xl font-heading font-black text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Indicators */}
                <div className="mt-8 space-y-4">
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <span className="text-sm text-text-secondary">Processing</span>
                    <div className="flex-1 mx-4 h-2 bg-background-light rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </div>
                    <span className="text-sm text-text-secondary">85%</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <span className="text-sm text-text-secondary">Accuracy</span>
                    <div className="flex-1 mx-4 h-2 bg-background-light rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '92%' }}
                        transition={{ duration: 1, delay: 1.1 }}
                      />
                    </div>
                    <span className="text-sm text-text-secondary">92%</span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default ToolsSection
