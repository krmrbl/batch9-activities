class Agents
	def initialize(name, birthplace, role)
		@name = name
		@birthplace = birthplace
		@role = role
	end

	def introduce
		puts "#{@name}'s from #{@birthplace}. #{@name}'s a #{@role}."
	end
end

agent_02 = Agents.new("Viper", "United States", "Controller")
agent_04 = Agents.new("Killjoy", "Germany", "Sentinel")

agent_02.introduce
agent_04.introduce